import React, { Component } from 'react'
import Form from "./Form";
import Photo from "./Photo";


class App extends React.Component {
    state = {
        date: "",
        photo: ""
    }
    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=nommR7P63QeVL4N768TjF0WYQHfvzFdeK5TS5pDB')
            .then(response => response.json())
            .then(json => this.setState({ photo: json }));
    }

    getPhoto = date => {
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=nommR7P63QeVL4N768TjF0WYQHfvzFdeK5TS5pDB`)
            .then(response => response.json())
            .then(json => this.setState({ photo: json }));
    }


    render() {
        return (
            <div>
                <Form changeDate={this.changeDate} />
                <Photo photo={this.state.photo} />
            </div>
        );
    }

    changeDate = e => {
        e.preventDefault();
        let inputDate = e.target[0].value;
        this.setState({ date: inputDate })
        this.getPhoto(inputDate);
    }
}

export default App;
