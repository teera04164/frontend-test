import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import App from './App';
import Upload from './pages/upload/uploadFile';
import Nav from './navigator/nav'
const AppWithRouter = () => (
    <HashRouter>
        <App />
    </HashRouter>
)
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

