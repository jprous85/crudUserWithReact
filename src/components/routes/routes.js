import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import User from '../pages/user'

export default function Routes (props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={User} />
            </Switch>
        </BrowserRouter>
    )
}