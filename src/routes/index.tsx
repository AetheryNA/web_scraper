import type { RouteObject } from 'react-router-dom'

import Home from '../pages/home'
import SignIn from '../pages/signin'

const routes : RouteObject[] = [
  {
    path: "/",
    element: <SignIn />
  }
]

export default routes
