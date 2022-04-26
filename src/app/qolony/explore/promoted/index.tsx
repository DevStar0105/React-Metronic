/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Ant30 from './ant30'
import Ant6 from './ant6'
import Ant1 from './ant1'
import Ant16 from './ant16'

const Promoted: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/explore/promoted/ant30'>
          <Ant30 />
        </Route>
        <Route path='/explore/promoted/ant6'>
          <Ant6 />
        </Route>
        <Route path='/explore/promoted/ant1'>
          <Ant1 />
        </Route>
        <Route path='/explore/promoted/ant16'>
          <Ant16 />
        </Route>
        <Redirect exact={true} from='/explore/promoted' to='/explore/promoted/ant30'></Redirect>
        <Redirect to='/explore/promoted/ant30'></Redirect>
      </Switch>
    </>
  )
}

export default Promoted