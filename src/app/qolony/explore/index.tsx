/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import { ExplorePage } from './explorepage'
import Test from './test'
import Saludo from './saludo'
import Promoted from './promoted'

const Explore: React.FC = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>Explore</PageTitle>
      <ExplorePage /> */}
      <Switch>
        <Route path='/explore/dashboard'>
          <PageTitle breadcrumbs={[]}>Explore</PageTitle>
          <ExplorePage />
        </Route>
        <Route path='/explore/test'>
          <Test />
        </Route>

        <Route path='/explore/saludo'>
          <Saludo />
        </Route>

        <Route path='/explore/promoted'>
          <Promoted />
        </Route>

        <Redirect from='/explore/' exact={true} to='/explore/dashboard' />
        <Redirect to='/explore/dashboard' />
      </Switch>
    </>
  )
}

export {Explore}