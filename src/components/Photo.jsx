import React from "react";

const Photo = props => <div>
    <h1>{props.photo.title}</h1>
    <img src={props.photo.url} alt={props.photo.title} />
    <p>{props.photo.explanation}</p>
</div>;

export default Photo;
