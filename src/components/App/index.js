import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import { ErrorPage } from 'smbc-react-components'
import ExamplePage from '../Pages/1-ExamplePage'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={getPageRoute(1)} component={ ExamplePage } />
                <Route exact path="/error" component={ ErrorPage } />
            </Switch>
        )
    }
}

export default App