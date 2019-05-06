import React from "react";

const Photo = props => (<div >
    <h1 style={style.imgWrapper}> {props.photo.title}  </h1>
    <div style={style.container}>
        <img src={props.photo.url} alt={props.photo.title} style={style.imgWrapper} />
        <p style={style.explonationWrapper} > {props.photo.explanation} </p>
    </div>
</div>);


const style = {
    container: {
        display: 'flex',
    },
    titleWrapper: {

    },
    imgWrapper: {
        width: '60vh',
        height: '60vh',
        margin: 20
    },
    explanationWrapper: {
        margin: 20
    }
}

export default Photo;
