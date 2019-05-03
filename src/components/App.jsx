import React, { Component } from 'react';
import Form from "./Form";
import Photo from "./Photo";

class App extends React.Component {
    state = {
        date: "",
        photo: ""
    }
    render() {
        return (
            <div>
                <h1>NASA API</h1>
                <Form changeDate={this.changeDate} />
                <Photo />
            </div>
        );
    }

    changeDate = e => {
        e.preventDefault();
        console.log(e.target[0].value);
    }
}

export default App;
