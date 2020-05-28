import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Base from './components/Base'
import './css/general.css'

ReactDom.render(<BrowserRouter><Base/></BrowserRouter>, document.getElementById('root'));