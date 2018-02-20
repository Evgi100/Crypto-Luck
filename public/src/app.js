import React from 'react';
import ReactDOM from 'react-dom'

import './styles/styles.scss'
import 'normalize.css/normalize.css'

import IndecisionApp from './components/IndecisionApp'












ReactDOM.render(<IndecisionApp options={['Bitcoin', 'Etherium', 'Rippel']} />, document.getElementById('app'))