import React from "react";

const Photo = props => (<div>
    <div style={flex.field}></div>
    <div style={flex.container}>

        <div style={flex.imgColumn}> <img src={props.photo.url} alt={props.photo.title} /> </div>

        <div style={flex.explanationColumn}>
            <h1 style={flex.titleWrapper}>{props.photo.title}</h1>
            <p>{props.photo.explanation}</p>
        </div>

    </div>
</div>);


const flex = {
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
        color: '#fff',

    },

    imgColumn: {
        margin: 0,
        height: '40%',
        width: '40%',
        maxWidth: '50%',
        padding: '20px 0px',

    },

    explanationColumn: {
        maxWidth: '50%',
        lineHeight: 1.4,
        fontSize: 20,
        margin: '0px 72px',
        padding: '0px 6px',
        color: '#5c6168'
    },
    field: {
        height: '100vh'
    }
}

export default Photo;
