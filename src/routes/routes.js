import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import UserList from '../components/pages/UserList'
import CreateUser from '../components/pages/CreateUser'
import UpdateUser from "../components/pages/UpdateUser";

export default function Routes (props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserList} />
                <Route exact path="/create" component={CreateUser} />
                <Route exact path="/update" component={UpdateUser} />
            </Switch>
        </BrowserRouter>
    )
}