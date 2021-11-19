import React from 'react';

const Banner = () => {
    const img1 = `https://ducatiasiapacific.com/wp-content/uploads/2021/11/Troy-Bayliss-02-Video-Full-1330x748-1.jpg`
    const img2 = `https://ducatiasiapacific.com/wp-content/uploads/2021/05/Diavel-1260-S-BYG-MY22-Model-Preview-1050x650-1.png`
    const img3 = `https://ducatiasiapacific.com/wp-content/uploads/2021/11/PV2-Bayliss-MY22-Tech-Spec-768x480-v02.png`

    return (
        <div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner about">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Banner;