import React from "react";
import "./profile.css";

const Profile = ({setUpdateGraphPage}) => {

  return (
    <div className="body">
<form class="form-container" enctype='multipart/form-data'>
	<div class="upload-files-container">
		<div class="drag-file-area">
			<span id="material" class="material-icons-outlined upload-icon"> Resume Upload </span>
			<h3 class="dynamic-message"> Drag & drop file here </h3>
        <form 
      id='uploadForm' 
      action='/upload' 
      method='post' 
      encType="multipart/form-data">
          <input type="file" name="sampleFile" />
          <input type='submit' value='Upload!' /> 
        </form> 
		</div>
		<span class="cannot-upload-message"> <span class="material-icons-outlined">error</span> Please select a file first <span class="material-icons-outlined cancel-alert-button">cancel</span> </span>
		<div class="file-block">
			<div class="file-info"> <span class="material-icons-outlined file-icon">description</span> <span class="file-name"> </span> | <span class="file-size">  </span> </div>
			<span class="material-icons remove-file-icon">delete</span>
			<div class="progress-bar"> </div>
		</div>
	</div>
</form>
</div>
  );
};

export default Profile;
