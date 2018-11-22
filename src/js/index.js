/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const body = document.body;

if(!body) {
    throw new Error("Cannot found document.body.");
}

const entryEl = document.createElement('div');
entryEl.className = 'entry';

body.appendChild(entryEl);

// ReactDOM.render(<App message="A" />, entryEl);
