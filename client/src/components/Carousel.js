import React from "react"
import cardimg from './images/earth.png';



const Carousel = () => {
    return (
        <body>
        <div className = "slide.container">
            <div className = "slide.content">
            <div className = "card-wrapper">
            <div className = "card">
            <div className = "image-content">
                <div class="card-image">
                    <img src={cardimg} alt="" className="cardimg"/>
                </div>

            </div>
            <div className="card-content">
            <h3 className="topic">Microbiology</h3>
            </div>
            </div>

            </div>

            </div>
        </div>
        </body>


    );
}

export default Carousel; 