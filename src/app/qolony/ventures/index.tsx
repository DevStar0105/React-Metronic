/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../_metronic/helpers'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import Test from './test'
import { VenturesPage } from './venturespage'

const Ventures: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/ventures/dashboard'>
          <PageTitle breadcrumbs={[]}>Ventures</PageTitle>
          <VenturesPage />
        </Route>
        <Route path='/ventures/test'>
          <PageTitle breadcrumbs={[]}>Test</PageTitle>
          <Test />
        </Route>

        <Redirect from='/ventures/' exact={true} to='/ventures/dashboard' />
        <Redirect to='/ventures/dashboard' />
      </Switch>
    </>
  )
}

export {Ventures}