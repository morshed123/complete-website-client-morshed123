import React from 'react';

import Study from '../../images/study3.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <main style={{ height: '400px' }} class="row d-flex align-items-center header-container bg-light  ">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }} className="text-danger">Ask You , Learning & Leading It   <br /> </h1>
                <p className="fw-bolder" className="text-danger">Best Scorer , Best Career & Ultimately by Building Best Nation With the power of Knowledge</p>

            </div>
            <div className="col-md-6 pb-2">
                <img src={Study} style={{ height: '470px' }} alt=""  className="img-fluid" />
            </div>
        </main>
    );
};

export default Banner;