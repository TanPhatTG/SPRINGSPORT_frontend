import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS của thư viện
import { Carousel } from "react-responsive-carousel";
function Carousel1() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={'../image/background/banner-1.jpg'}  />
                            </div>
                            <div className="col-4">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={'../image/background/banner-2.jpg'}  />
                            </div>
                            <div className="col-7">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={'../image/background/banner-3.jpg'}  />
                            </div>
                            <div className="col-7">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}


export default Carousel1;