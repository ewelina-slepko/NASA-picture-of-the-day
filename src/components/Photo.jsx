import React from "react";

const Photo = props => (<div style={style.container}>
    <h1 > {props.photo.title} </h1>
    <img src={props.photo.url} alt={props.photo.title} style={style.imgWrapper} />
    <p> {props.photo.explanation} style={style.explonationWrapper}
    </p>
</div>);


const style = {
    container: {

    },
    imgWrapper: {

    },
    explanationWrapper: {

    }
}

export default Photo;
