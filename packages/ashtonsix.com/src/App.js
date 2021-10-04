import React, {Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const Resume = React.lazy(() => import('./pages/Resume'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Pricepaid = React.lazy(() => import('./pages/Pricepaid'))
const Closenesslines = React.lazy(() => import('./pages/Closenesslines'))
// const SalamanderText = React.lazy(() => import('./pages/SalamanderText'))
const SalamanderInteractive = React.lazy(() =>
  import('./pages/SalamanderInteractive')
)

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/p/pricepaid" component={Pricepaid} />
          <Route path="/p/closenesslines" component={Closenesslines} />
          {/* <Route path="/p/salamander" component={SalamanderText} /> */}
          <Route path="/p/salamander" component={SalamanderInteractive} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
