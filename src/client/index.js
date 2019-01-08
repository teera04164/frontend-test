import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import Upload from './pages/upload/uploadFile';
import Nav from './navigator/nav'
const AppWithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

