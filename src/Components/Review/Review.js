import React from 'react';

const Review = (props) => {
    const { name, imageURL, price,} = props.review;
    return (
        <div className=" shadow col-md-3 mt-3 pt-2 pb-2 mb-5  ">
        <img style={{height:'150px'}} src={imageURL} alt=""/>
        <h5 >Name : {name}</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis magnam enim.</p>
    </div>
    );
};

export default Review;