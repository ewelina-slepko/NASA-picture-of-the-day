import React, { Component } from 'react'
import Date from "./Date";
import Photo from "./Photo";
import logo from "../images/logo.png"

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
            <>
                <div className="container">
                    <img className="headerImg" src={logo} />
                    <h1>Picture of the day</h1>
                </div>
                <Date changeDate={this.changeDate} />
                <Photo photo={this.state.photo} />
            </>
        );
    }

    changeDate = e => {
        e.preventDefault();
        const inputDate = e.target[0].value;
        this.setState({ date: inputDate })
        this.getPhoto(inputDate);
    }
}

export default App;
