import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import App from './App';
import Upload from './pages/upload/uploadFile';
import Nav from './navigator/nav'
import MailGroup from './pages/mailGroup/mailGroup'
const AppWithRouter = () => (
    <HashRouter>
        <MailGroup />
    </HashRouter>
)
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

