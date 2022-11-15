import "./backgroundgrid.css"

function BackgroundGrid() {
    const images = ["./images/background.png", "./images/band.png", "./images/caps.jpg", "./images/fans.png", "./images/culture.png", "/images/class.png", "./images/crowd.webp", "./images/homecoming.png", "./images/library.jpeg", "./images/podcast.png", "./images/football.png", 
    "./images/graduates.png", "/images/basketball.png", "./images/speeches.png", "./images/orchestra.png", "./images/students.png", "./images/theater.webp", "./images/art.png", "./images/running.png", "./images/volleyball.png"];
    return (
        <div className="wrapper">
            {/* <img src={"./images/background.png"} alt="" />
            <img src={"./images/band.png"} alt="" />
            <img src={"./images/caps.jpg"} alt="" />
            <img src={"./images/class.png"} alt="" /> */}
        {images.map((image) => {
              return ( 
            <div className="content-container">
              <img width="100%" class="content-image" src={image} alt="" />
            </div>
        )})} 
        </div>
    )};

export default BackgroundGrid; 