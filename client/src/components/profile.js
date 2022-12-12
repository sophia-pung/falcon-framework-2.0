import React from "react";
import "./profile.css";
import { useState, useEffect } from "react";
import GraphvisPage from "./graphVis";

const Profile = ({setUpdateGraphPage}) => {
  const [resumeData, setResumeData] = useState('');

  function onSubmit () {
    setUpdateGraphPage(true);
    let url = "";
    console.log("RESUMEDATA");
    //query parameter > still matches on resume bc doesn't read anything after "?"
    // fetch(`/resume?url=${url}`, {
    //   method: "GET",
    // })
    //     //data comes in as string, gets converted to json object 
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log("data", data)
    //         //sets outfits as the JSON data by replacing the empty array
    //         //changes value from null to new value, after setting it, it triggers a re-render
    //         setResumeData(data);
    //     })
  };
  
  // let draggableFileArea = document.querySelector(".drag-file-area");
  // let browseFileText = document.querySelector(".browse-files");
  // let uploadIcon = document.querySelector(".upload-icon");
  // let dragDropText = document.querySelector(".dynamic-message");
  // let fileInput = document.querySelector(".default-file-input");
  // let cannotUploadMessage = document.querySelector(".cannot-upload-message");
  // let cancelAlertButton = document.querySelector(".cancel-alert-button");
  // let uploadedFile = document.querySelector(".file-block");
  // let fileName = document.querySelector(".file-name");
  // let fileSize = document.querySelector(".file-size");
  // let progressBar = document.querySelector(".progress-bar");
  // let removeFileButton = document.querySelector(".remove-file-icon");
  // let uploadButton = document.querySelector(".upload-button");
  // let fileFlag = 0;
  
  // fileInput.addEventListener("click", () => {
  //   fileInput.value = '';
  //   console.log(fileInput.value);
  // });
  
  // fileInput.addEventListener("change", e => {
  //   console.log(" > " + fileInput.value)
  //   uploadIcon.innerHTML = 'check_circle';
  //   dragDropText.innerHTML = 'File Dropped Successfully!';
  //   document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
  //   uploadButton.innerHTML = `Upload`;
  //   fileName.innerHTML = fileInput.files[0].name;
  //   fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
  //   uploadedFile.style.cssText = "display: flex;";
  //   progressBar.style.width = 0;
  //   fileFlag = 0;
  // });
  
  // uploadButton.addEventListener("click", () => {
  //   let isFileUploaded = fileInput.value;
  //   if(isFileUploaded != '') {
  //     if (fileFlag == 0) {
  //         fileFlag = 1;
  //         var width = 0;
  //         var id = setInterval(frame, 50);
  //         function frame() {
  //             if (width >= 390) {
  //               clearInterval(id);
  //           uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
  //             } else {
  //               width += 5;
  //               progressBar.style.width = width + "px";
  //             }
  //         }
  //       }
  //   } else {
  //     cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
  //   }
  // });
  
  // cancelAlertButton.addEventListener("click", () => {
  //   cannotUploadMessage.style.cssText = "display: none;";
  // });
  
  // if(isAdvancedUpload) {
  //   ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
  //     draggableFileArea.addEventListener(evt, e => {
  //       e.preventDefault();
  //       e.stopPropagation();
  //     })
  //   );
  
  //   ["dragover", "dragenter"].forEach( evt => {
  //     draggableFileArea.addEventListener(evt, e => {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       uploadIcon.innerHTML = 'file_download';
  //       dragDropText.innerHTML = 'Drop your file here!';
  //     });
  //   });
  
  //   draggableFileArea.addEventListener("drop", e => {
  //     uploadIcon.innerHTML = 'check_circle';
  //     dragDropText.innerHTML = 'File Dropped Successfully!';
  //     document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
  //     uploadButton.innerHTML = `Upload`;
      
  //     let files = e.dataTransfer.files;
  //     fileInput.files = files;
  //     console.log(files[0].name + " " + files[0].size);
  //     console.log(document.querySelector(".default-file-input").value);
  //     fileName.innerHTML = files[0].name;
  //     fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
  //     uploadedFile.style.cssText = "display: flex;";
  //     progressBar.style.width = 0;
  //     fileFlag = 0;
  //   });
  // }
  
  // removeFileButton.addEventListener("click", () => {
  //   uploadedFile.style.cssText = "display: none;";
  //   fileInput.value = '';
  //   uploadIcon.innerHTML = 'file_upload';
  //   dragDropText.innerHTML = 'Drag & drop any file here';
  //   document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
  //   uploadButton.innerHTML = `Upload`;
  // });

  //<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">

  return (
    <div className="body">
<form class="form-container" enctype='multipart/form-data'>
	<div class="upload-files-container">
		<div class="drag-file-area">
			<span id="material" class="material-icons-outlined upload-icon"> Resume Upload </span>
			<h3 class="dynamic-message"> Drag & drop file here </h3>
			<label class="label"> or <span class="browse-files"> <input type="file" class="default-file-input"/> 
        <form 
      id='uploadForm' 
      action='http://localhost:8000/upload' 
      method='post' 
      encType="multipart/form-data">
          <input type="file" name="sampleFile" />
          <input type='submit' value='Upload!' /> 
        </form> 
        <span class="browse-files-text">browse file</span> <span>from device</span> </span> </label>
		</div>
		<span class="cannot-upload-message"> <span class="material-icons-outlined">error</span> Please select a file first <span class="material-icons-outlined cancel-alert-button">cancel</span> </span>
		<div class="file-block">
			<div class="file-info"> <span class="material-icons-outlined file-icon">description</span> <span class="file-name"> </span> | <span class="file-size">  </span> </div>
			<span class="material-icons remove-file-icon">delete</span>
			<div class="progress-bar"> </div>
		</div>
		<button onClick={onSubmit} type="button" class="upload-button"> Upload </button>
	</div>
</form>
</div>
  );
};

export default Profile;
