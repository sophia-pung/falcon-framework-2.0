import "./backgroundgrid.css"

function BackgroundGrid() {
    const images = ["../images/background.png", "../images/band.png", "../images/caps.jpg", "../images/running.png", "../images/fans.png", "../images/art.png", "../images/class.png",  "../images/library.jpeg", "../images/crowd.webp", "../images/podcast.png", "../images/football.png", 
    "../images/graduates.png", "../images/basketball.png", "../images/orchestra.png", "../images/students.png", "../images/theater.webp", "../images/culture.png", "../images/speeches.png", "../images/volleyball.png", "../images/homecoming.png"];
    return (
        <div className="wrapper">
        {images.map((image) => {
              return ( 
            <div className="content-container">
              <img width="100%" src={image} alt="" />
            </div>
        )})} 
        </div>
    )};

export default BackgroundGrid; 