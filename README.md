<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sophia-pung/falcon-framework-2.0">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1587726922/rdaleorg/ekdtpkytkyr90pidagnp/ArmstrongHS-C.png" alt="Logo" width="120" height="80">
  </a>

  <h3 align="center">Falcon Framework</h3>

  <p align="center">
    H2 Techtonica Cohort Final Project
    <br />
    <br />
    <a href="https://server-l0y7.onrender.com/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The Falcon Framework was created to help students see what careers people with a similar background to them took. It allows them to visualize what paths working professionals took who started at the same place that they did. It was built to show students what's possible, and how they can get from point A to point B, by seeing the paths that others took. The project parses resume data to then identify the workplaces and educational institutions of the user. It then receives the resume data back as a JSON object, calls the image API to load images into the workplace and education objects, and sends these back to the frontend so that they can be rendered as nodes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Architecture

The project's architecture is mostly composed of queries and functions in the `server.js` file. After a resume is uploaded, the `getWorkplaces` is called that takes in a data object returned by the resume parser API as an input. The function extracts data from the education and `workExperience` properties of the data object, creates new objects for each education and work experience, and adds them to an array called `finalData`. The function then returns the finalData array. The function also includes a nested function called `ImageSearch` that takes in a `workplaceList` as an input and adds an imageurl property to each object in the list by using a Google Image search. The `ImageSearch` function then saves the workplace information to a database using the workplace, category, and imageurl properties of the workplace objects. The `seedWorkplaces` function calls the getWorkplaces function and passes the returned data to the `ImageSearch` function.



### Built With

* [![Node.js][Node.js]][Node-url]
* [![React][React.js]][React-url]
* [![postgreSQL][postgreSQL]][postgreSQL-url]
* [![Express.js][Express.js]][Express-url]
* [![react-graph-vis][react-graph-vis]][react-graph-vis-url]
* [![express-fileupload][express-fileupload]][express-fileupload-url]
* [![Git][Git]][Git-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up the project locally.

### Prerequisites

Node.js and npm

Node.js Installation

First, you need to make sure that you have Node.js installed on your computer. 
To install Node.js on Mac, you can use the package manager Homebrew. First, make sure that Homebrew is installed on your computer. Then run the following command in the terminal to install Node.js:

brew install node

npm, the Node.js package manager, should be installed automatically with Node.js. You can test if Node.js and npm are installed correctly on Mac by running the command

node -v

and

npm -v

### Installation

1. Get a free API Key for the Affinda resume parser at: https://app.affinda.com/auth/login?next=%2Fresumes and for the Serpapi API at: https://serpapi.com/users/sign_up
2. Clone the repo:
   git clone https://github.com/sophia-pung/falcon-framework-2.0.git
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```js
   const API_KEY = 'ENTER YOUR API';
   const REACT_APP_SECRET_API_KEY="ENTER SERPAPI API KEY"

   ```
5. In profile.js change action: /upload to action: 'http://localhost8000:/upload' 
6. Go to the client folder (`cd .. and cd client`) and run the command `npm install`
7. Both server should run now with `npm start`
8. Go to localhost:3000 and you should see something like this:
<p align="center">
    <img width="1000" src="https://github.com/sophia-pung/falcon-framework-2.0/blob/main/client/public/images/localhost.png" alt="localhost">
</p>


[Node.js]: https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodejs&logoColor=61DAFB
[Node-url]: https://nodejs.org/en/
[React.js]: https://img.shields.io/badge/React-35495E?style=for-the-badge&logo=react&logoColor=4FC08D
[React-url]: https://reactjs.org/
[PostgreSQL-url]: https://www.postgresql.org/
[postgreSQL]: https://img.shields.io/badge/postgreSQL-DD0031?style=for-the-badge&logo=sql&logoColor=white
[Express-url]: https://expressjs.com/
[Express.js]: https://img.shields.io/badge/Express-4A4A55?style=for-the-badge&logo=expressjs&logoColor=FF3E00
[react-graph-vis-url]: https://www.npmjs.com/package/react-graph-vis
[react-graph-vis]: https://img.shields.io/badge/reactgraphvis-FF2D20?style=for-the-badge&logo=reactgraphvis&logoColor=white
[express-fileupload]: https://img.shields.io/badge/expressfileupload-563D7C?style=for-the-badge&logo=&logoColor=white
[express-fileupload-url]: https://www.npmjs.com/package/express-fileupload
[Git]: https://img.shields.io/badge/Git-0769AD?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com/