import React from "react";

const Photo = props => (

    <div className="wrapper">
        <img className="section-img" src={props.photo.url} alt={props.photo.title} />
        <div className="section-text">
            <h2>{props.photo.title}</h2>
            <p>{props.photo.explanation}</p>
        </div>
    </div>
);
export default Photo;
