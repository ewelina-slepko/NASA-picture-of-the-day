import React from "react";

const Photo = props => (<div>

    <div style={style.container}>

        <div style={style.imgFlex}> <img src={props.photo.url} alt={props.photo.title} /> </div>

        <div style={style.explanationFlex}>
            <h1 style={style.titleWrapper}>{props.photo.title}</h1>
            <p>{props.photo.explanation}</p>
        </div>

    </div>
</div>);


const style = {

    container: {
        padding: 3,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
    },

    titleWrapper: {
        textAlign: 'center',
        color: '#a5b0b9',
    },

    imgFlex: {
        margin: 0,
        height: '40%',
        width: '40%',
        maxWidth: '50%',
        padding: '20px 0px'

    },

    explanationFlex: {
        maxWidth: '50%',
        lineHeight: 1.4,
        fontSize: 20,
        margin: '0px 72px',
        padding: '0px 6px',
        color: '#5c6168'
    }
}

export default Photo;
