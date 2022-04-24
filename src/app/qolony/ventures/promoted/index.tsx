/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Ant30 from './ant30'

const Promoted: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/ventures/promoted/ant30'>
          <Ant30 />
        </Route>
        <Route path='/ventures/promoted/ant6'>
          <div>hello6</div>
        </Route>
        <Redirect exact={true} from='/ventures/promoted' to='/ventures/promoted/ant30'></Redirect>
        <Redirect to='/ventures/promoted/ant30'></Redirect>
      </Switch>
    </>
  )
}

export default Promoted