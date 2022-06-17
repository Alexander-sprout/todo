import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main } from '@/pages/main'
import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'
import { Page3 } from './pages/Page3'
const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/Page1',
    component: Page1,
  },
  {
    path: '/Page2',
    component: Page2,
  },
  {
    path: '/Page3',
    component: Page3,
  }
]

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route) => {
        const Component = route.component
        return (
          <Route key={route.path} path={route.path} exact>
            <Component />
          </Route>
        )
      })}
    </Switch>
  </Router>
)
