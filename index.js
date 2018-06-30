// index.js
//imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app';



//select the html element and render the app
const root = document.querySelector('#app')
//render app module
ReactDOM.render(<App />  , root)
