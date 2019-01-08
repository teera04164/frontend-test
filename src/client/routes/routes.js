import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MailGroup from '../pages/MailGroup/MailGroup'
import UploadFile from '../pages/upload/uploadFile';

export default () => (
    <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/mailgroup" component={MailGroup} />
        <Route exact path="/createMailList/uploadFile" component={UploadFile} />
        {/* <Route exact path="/posts" component={Post} /> */}
    </Switch>
)