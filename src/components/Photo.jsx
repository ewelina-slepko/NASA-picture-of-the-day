import React from "react";

const Photo = props => (
    <>
        <h2 className="title">{props.photo.title}</h2>
        <div className="wrapper">
            <img className="section-img" src={props.photo.url} alt={props.photo.title} />
            <p className="section-text">{props.photo.explanation}</p>
        </div>
    </>
);
export default Photo;
