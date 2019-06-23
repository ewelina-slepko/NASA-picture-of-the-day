import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.render(< App />, document.getElementById('app'));
