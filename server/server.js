const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload');
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");
const app = express();

const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(process.env.REACT_APP_SECRET_API_KEY);

//allows me to upload files and put them in public folder for URL access
app.use(fileUpload());

function getWorkplaces(data) {
  console.log(data)
  let education = data.data.education;
  let finalData = [];
  for (let i = 0; i < education.length; i++) {
    let educationData = { workplace: "", category: "education", imageurl: "" };
    educationData.workplace = education[i].organization;
    finalData.push(educationData);
  }
  let workExperience = data.data.workExperience;
  for (let i = 0; i < workExperience.length; i++) {
    let workplaceData = { workplace: "", category: "job", imageurl: "" };
    workplaceData.workplace = workExperience[i].organization;
    finalData.push(workplaceData);
  }
  return finalData;
}

const seedWorkplaces = async (req, res) => {
  async function ImageSearch(workplaceList) {
    for (let i = 0; i < workplaceList.length; i++) {
      if (workplaceList[i].workplace != null) {
          const data = await getImageData({
            q: workplaceList[i].workplace,
            tbm: "isch",
            ijn: "0",
          });
          workplaceList[i].imageurl = data["images_results"][0].thumbnail;
          try {
          const query =
            "INSERT INTO workplaces(workplace, category, imageurl) VALUES($1, $2, $3) RETURNING *";
          const values = [
            workplaceList[i].workplace,
            workplaceList[i].category,
            workplaceList[i].imageurl,
          ];
          const result = await db.query(query, values);
          console.log("result", result);
          console.log(result.rows[0]);
        } catch (e) {
          console.log("E", e);
        }
      }
      console.log("finalList", workplaceList);
    }
  }
  
  await ImageSearch(req.body);
  res.redirect('/#/network-page');
}

app.post('/upload', function(req, res, next) {
  let sampleFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/../client/public/uploads/' + sampleFile.name;
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);
      let url = "https://server-l0y7.onrender.com/" + `uploads/${sampleFile.name}`;
      client.createResume({url: url}).then((result) => {
        const workplaces = getWorkplaces(result)
        req.body = workplaces;
        next() 
      }) .catch( (e) => {
        res.status(500).send(e);
      }
      )
  });
}, seedWorkplaces);


app.use('/uploads', express.static(__dirname + '/../client/public/uploads/'))

const getImageData = (params) => {
  return new Promise((resolve, reject) => {
    try {
      search.json(params, resolve);
    } catch (e) {
      reject(e);
    }
  });
};

const { AffindaCredential, AffindaAPI } = require("@affinda/affinda");
const { nextTick } = require("process");
const credential = new AffindaCredential(process.env.API_KEY);
const client = new AffindaAPI(credential);

const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");

app.use(express.static(REACT_BUILD_DIR));

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

app.get("/resume", (req, res) => {
  const url = req.query.url;
  client.createResume({url: url}).then((result) => {
    res.send(result);
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
});

app.get("/db/nodes", cors(), async (req, res) => {
  console.log("HEREE")
  try {
    const { rows: workplaces } = await db.query("SELECT * FROM workplaces");
    console.log("here")
    console.log(workplaces)
    res.send(workplaces);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

console.log("API_KEY", process.env.REACT_APP_SECRET_API_KEY);

app.post("/api/workplaces", cors(), seedWorkplaces);