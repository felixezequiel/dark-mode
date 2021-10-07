import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from '../components/private/routes'
import { Home } from '../pages/home'
import { Login } from '../pages/login'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Login } />
        <PrivateRoute exact={ true } path='/home' page={ Home } />
      </Switch>
    </Router>
  )
}