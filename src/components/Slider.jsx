import React from 'react';
import FImg from "../assets/1.jpg"
import SImg from "../assets/2.jpg"
import TImg from "../assets/3.jpg"

function Slider(props) {
  
    return (

        <div>
                
            <div  className="carousel slide mt-15" data-bs-ride="carousel">


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={FImg} alt="Los Angeles" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={SImg} alt="Chicago" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={TImg} alt="New York" className="d-block w-100" />
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

        </div>
    );
}

export default Slider;