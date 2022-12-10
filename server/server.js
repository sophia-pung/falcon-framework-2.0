const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload');
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");
const app = express();

const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(process.env.REACT_APP_SECRET_API_KEY);
const params = {
  q: "Orange",
  tbm: "isch",
  ijn: "0",
};
const util = require("util");

// function getJson(parameter, resolve, reject) {
//   try {
//     search.json(parameter, resolve)
//   } catch (e) {
//     reject(e)
//   }
// }
app.use(fileUpload());

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  console.log("req files", req.files);

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/../client/public/uploads/' + sampleFile.name;
  console.log("dirname", __dirname)
  console.log("upload path", uploadPath)

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});


app.use('/static', express.static('public'))
app.get('/static/uploads', (req, res) => {
  console.log("RES", res)
  res.sendFile(res)
})

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
const credential = new AffindaCredential(process.env.API_KEY);
const client = new AffindaAPI(credential);

const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");

app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 8080;
console.log("post", PORT);
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  //res.json({ message: 'Hello from My template ExpressJS' });
  console.log("Hello I'm here");
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

app.get("/resume", (req, res) => {
  const url = req.query.url;
  client.createResume({url: url}).then((result) => {
    console.log("Returned data:", result);
    res.send(result);
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
});

//pull workplace name, call the image API and then put the image back into the workplaces table
app.get("/api/images", cors(), async (req, res) => {
  try {
    const { rows: images } = await db.query("SELECT workplace FROM workplaces");
    res.send(images);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the get request
app.get("/api/students", cors(), async (req, res) => {
  // const STUDENTS = [

  //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
  //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
  //     { id: 3, firstName: 'Fariba', lastName: 'Dadko' },
  //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
  //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
  // ];
  // res.json(STUDENTS);
  try {
    const { rows: workplaces } = await db.query(
      "SELECT workplace, imageurl FROM workplaces"
    );
    res.send(workplaces);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.get("/db/nodes", cors(), async (req, res) => {
  try {
    const { rows: workplaces } = await db.query("SELECT * FROM workplaces");
    res.send(workplaces);
  } catch (e) {
    return res.status(400).json({ e });
  }
});
/*
>>>>>>> Stashed changes
>>>>>>> 96394bd (updating the project README.md)
// create the POST request
app.post('/api/students', cors(), async (req, res) => {
  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  console.log([newUser.firstname, newUser.lastname]);
  const result = await db.query(
    'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
    [newUser.firstname, newUser.lastname],
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

//A put request - Update a student 
app.put('/api/students/:studentId', cors(), async (req, res) =>{
  console.log(req.params);
  //This will be the id that I want to find in the DB - the student to be updated
  const studentId = req.params.studentId
  const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
  console.log("In the server from the url - the student id", studentId);
  console.log("In the server, from the react - the student to be edited", updatedStudent);
  // UPDATE students SET lastname = "something" WHERE id="16";
  const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
  const values = [updatedStudent.lastname, updatedStudent.firstname];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);

  }catch(e){
    console.log(e);
    return res.status(400).json({e})
  }
})

// delete request
app.delete('/api/students/:studentId', cors(), async (req, res) =>{
  const studentId = req.params.studentId;
  //console.log("From the delete request-url", req.params);
  await db.query('DELETE FROM students WHERE id=$1', [studentId]);
  res.status(200).end();

});
*/

// create the POST request for a new user
// CREATE TABLE users (
// 	ID SERIAL PRIMARY KEY,
// 	lastname varchar(255),
// 	firstname varchar(255),
//     email varchar(255),
//     sub varchar(255));
app.post("/api/me", cors(), async (req, res) => {
  console.log("I've hit this route");
  const newUser = {
    lastname: req.body.family_name || "",
    firstname: req.body.given_name || "",
    email: req.body.email || "",
    linkedIn: "",
  };
  console.log(newUser);

  const queryEmail = "SELECT * FROM users WHERE email=$1 LIMIT 1";
  const valuesEmail = [newUser.email];
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if (resultsEmail.rows[0]) {
    console.log(`Thank you ${resultsEmail.rows[0].firstname} for comming back`);
  } else {
    const query =
      "INSERT INTO users(last_name, first_name, email, linkedin) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [
      newUser.lastname,
      newUser.firstname,
      newUser.email,
      newUser.linkedIn,
    ];
    const result = await db.query(query, values);
    console.log(result.rows[0]);
  }
  res.send(newUser);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

console.log("API_KEY", process.env.REACT_APP_SECRET_API_KEY);

app.post("/api/workplaces", cors(), async (req, res) => {
  async function ImageSearch(workplaceList) {
    for (let i = 0; i < workplaceList.length; i++) {
      console.log("workplaces", workplaceList[i]);
      console.log("name", workplaceList[i].workplace);
      if (workplaceList[i].workplace != null) {
          const data = await getImageData({
            q: workplaceList[i].workplace,
            tbm: "isch",
            ijn: "0",
          });
          console.log("TEST", data["images_results"][0].thumbnail);
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
  console.log("I'VE HIT THE REQUEST");
  // Show result as JSON
  console.log(req.body);
  console.log("END");
  // const newWorkplace = {
  //   workplace: req.body.family_name || "",
  //   firstname: req.body.given_name || "",
  //   email: req.body.email || "",
  //   linkedIn: "",
  // }
});

// const util = require('util')

// function getJson(parameter, resolve, reject) {
//   try {
//     search.json(parameter, resolve)
//   } catch (e) {
//     reject(e)
//   }
// }

// const getImageData = util.promisify(getJson)[util.promisify.custom];

// // inside of your POST route instead of `search.json(params, callback)`
// const data = await getImageData({ q: YOUR_WORKPLACE_NAME_HERE, tbm: 'isch', ijn: "0");
// console.log(data["images_results"]);
