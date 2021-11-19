import React from 'react';
import "./BestThing.css"
const BestThing = () => {
    return (
        <div className="container">
            <div>
                <div className=" saving-trip">
                    <div><i className="fa fa-gift gift"></i></div>
                    <div>
                        <h2>Members are Saving with DucatiBd!</h2>
                        <p>Join with Ducati  and start exploring the best of best</p>
                    </div>
                </div>
                <div className="percentage">
                    <div>
                        <i className="fa fa-file-text"></i>
                    </div>
                    <div>
                        <h2> Want to save up to 50% gas get Ducati!</h2>
                        <p> Please send me exclusive deals and  updates</p>
                        <div>
                            <input type="text" placeholder="Email...." />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestThing;