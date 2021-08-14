import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Card from './Card.js';
import PlayerList from "./PlayerList.js";
import {players} from "./players.js";
import {pics} from "./img.js";
import reportWebVitals from './reportWebVitals';
import 'tachyons';
 
ReactDOM.render(
  <React.StrictMode>
   <PlayerList players={players} pics={pics}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
