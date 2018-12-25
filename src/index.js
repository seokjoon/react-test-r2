import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import App from './App';
import EventHandling from "./EventHandling/EventHandling";
//import PropState from "./PropState/PropState";
//import Styling from "./Styling/Styling";


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<EventHandling/>, document.getElementById('root'));
//ReactDOM.render(<PropState nameCom="test" numCom={1} />, document.getElementById('root'));
//ReactDOM.render(<Styling/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
