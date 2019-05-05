import React from "react";

const Photo = props => (<div style={style.container}>
    <h1 > {props.photo.title} </h1>
    <img src={props.photo.url} alt={props.photo.title} />
    <p> {props.photo.explanation}
    </p>
</div>);


const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
    }
}

export default Photo;
