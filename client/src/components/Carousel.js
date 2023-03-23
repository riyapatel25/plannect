
import React from "react"
import cardimg from './images/blueplanet.png';
import cardimg2 from './images/greenplanet.png';



const Carousel = () => {
    return (
        <carousel className = "carousel">
        <h1 className="subhead">Ask me about:</h1>
        <body>
            <div className = "card-wrapper">

            {/* Card 1 */}
            <div className = "teach" id='1'>
            <div className = "image-content">
                <div class="card-image">
                    <img src={cardimg} alt="" className="cardimg"/>
                </div>

            </div>
            <div className="card-content">
            <h3 className="topic">Microbiology</h3>
            </div>
            </div>

            {/* Card 2 */}
            <div className = "teach" id='2'>
            <div className = "image-content">
                <div class="card-image">
                    <img src={cardimg} alt="" className="cardimg"/>
                </div>

            </div>
            <div className="card-content">
            <h3 className="topic">Basketball</h3>
            </div>
            </div>

            {/* Card 3 */}
            <div className = "teach" id='1=3'>
            <div className = "image-content">
                <div class="card-image">
                    <img src={cardimg} alt="" className="cardimg"/>
                </div>

            </div>
            <div className="card-content">
            <h3 className="topic">Autocode</h3>
            </div>
            </div>
            </div>
        </body>

        <h1 className="subhead">I'd like to learn about:</h1>
        <body>
            <div className = "card-wrapper">

            {/* Card 1 */}
            <div className = "learn" id='1'>
            <div className = "image-content">
                <div class="card-image">
                    <img src={cardimg2} alt="" className="cardimg"/>
                </div>

            </div>
            <div className="card-content">
            <h3 className="topic">Astronomy</h3>
            </div>
            </div>

            {/* Card 2 */}
            <div className = "learn" id='2'>
            <div className = "image-content">
                <div class="card-image">
                    <img src={cardimg2} alt="" className="cardimg"/>
                </div>

            </div>
            <div className="card-content">
            <h3 className="topic">Altruism</h3>
            </div>
            </div>

            {/* Card 3 */}
            <div className = "learn" id='1=3'>
            <div className = "image-content">
                <div class="card-image">
                    <img src={cardimg2} alt="" className="cardimg"/>
                </div>

            </div>
            <div className="card-content">
            <h3 className="topic">Social Injustice</h3>
            </div>
            </div>
            </div>
        </body>
        </carousel>

        
    );
}



export default Carousel; 