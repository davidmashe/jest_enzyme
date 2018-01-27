import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/main.js';

const target = document.getElementById('react');

const vDOM = (
	<Main />
);

ReactDOM.render(vDOM, target);