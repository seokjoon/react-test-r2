import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//import App from './App';
//import ComFunc from "./ComFunc/ComFunc";
//import Css from "./Styling/Css";
//import CssModule from "./Styling/CssModule";
//import EventHandling from "./EventHandling/EventHandling";
//import LifeCycleContainer from "./Lifecycle/LifeCycleContainer";
//import LoopMap from "./LoopMap/LoopMap";
//import PropState from "./PropState/PropState";
//import ReduxCounter from "./ReduxCounter/containers/ReduxCounter";
import ReduxCounterMulti from "./ReduxCounterMulti/containers/ReduxCounterMulti";
//import RefCom from "./DomRef/RefCom";
//import Sass from "./Styling/Sass";
//import SassButton from "./Styling/SassButton";
//import TestTodoList from "./TestTodoList/TestTodoList";
//import Validate from "./DomRef/Validate";

import { createStore } from "redux";
//import reducers from './ReduxCounter/reducers';
import reducers from './ReduxCounterMulti/reducers';
import { Provider } from 'react-redux';
//const store = createStore(reducers);
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ComFunc/>, document.getElementById('root'));
//ReactDOM.render(<Css/>, document.getElementById('root'));
//ReactDOM.render(<CssModule/>, document.getElementById('root'));
//ReactDOM.render(<EventHandling/>, document.getElementById('root'));
//ReactDOM.render(<LifeCycleContainer />, document.getElementById('root'));
//ReactDOM.render(<LoopMap />, document.getElementById('root'));
//ReactDOM.render(<PropState nameCom="test" numCom={1} />, document.getElementById('root'));
//ReactDOM.render(<RefCom/>, document.getElementById('root'));
//ReactDOM.render(<Provider store={store}><ReduxCounter/></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><ReduxCounterMulti/></Provider>, document.getElementById('root'));
//ReactDOM.render(<Sass/>, document.getElementById('root'));
//ReactDOM.render(<SassButton/>, document.getElementById('root'));
//ReactDOM.render(<TestTodoList/>, document.getElementById('root'));
//ReactDOM.render(<Validate/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
