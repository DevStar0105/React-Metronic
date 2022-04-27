/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Ant30 from './ant30'
import Ant6 from './ant6'
import Ant1 from './ant1'
import Ant16 from './ant16'

const Promoted: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/ventures/promoted/ant30'>
          <Ant30 />
        </Route>
        <Route path='/ventures/promoted/ant6'>
          <Ant6 />
        </Route>
        <Route path='/ventures/promoted/ant1'>
          <Ant1 />
        </Route>
        <Route path='/ventures/promoted/ant16'>
          <Ant16 />
        </Route>
        <Redirect exact={true} from='/ventures/promoted' to='/ventures/promoted/ant30'></Redirect>
        <Redirect to='/ventures/promoted/ant30'></Redirect>
      </Switch>
    </>
  )
}

export default Promoted