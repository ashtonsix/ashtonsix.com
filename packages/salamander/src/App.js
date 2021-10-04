import React from 'react'
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import Apollo from 'Apollo'

import history from 'misc/history'
import Container from 'components/Container'
import Page from 'pages/Page'

const Dashboard = () => import('pages/Dashboard')
const Landing = () => import('pages/Landing')

class App extends React.Component {
  render() {
    return (
      <Apollo>
        <Router history={history}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <Container loggedIn={false}>
                    <Page component={Landing} title="Salamander" />
                  </Container>
                )
              }}
            />
            <Route
              path="/dashboard"
              render={() => {
                return (
                  <Container loggedIn={true}>
                    <Page
                      component={Dashboard}
                      title="Dashboard — Salamander"
                    />
                  </Container>
                )
              }}
            />
            <Route path="/login">
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/logout">
              <Redirect to="/" />
            </Route>
            <Route path="/signup">
              <Redirect to="/dashboard" />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </Apollo>
    )
  }
}

export default App
