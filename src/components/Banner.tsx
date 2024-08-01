import React from "react";

function Banner(){
    return (
        <div className="p-2 mb-2 bg-dark" style={{ height: '290px' }}>
                <div className="container-fluid py-5 text-white d-flex 
                justify-content-center align-items-center" >
                    <div>
                        <h3 className="display-5 fw-bold">
                        Badminton is fun for all ages! <br/> Serve. Succeed.
                        </h3>
                        <p className="">Chen Long</p>
                        <button className="btn btn-primary btn-lg text-white float-end">Discovery Us</button>                        
                    </div>
                </div>
        </div>
    );
}

export {Banner}