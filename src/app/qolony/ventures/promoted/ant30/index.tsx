/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../../_metronic/helpers'
import { PageTitle } from '../../../../../_metronic/layout/core'
import { Ant30Page } from './ant30dpage'

const Ant30: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Ant 30</PageTitle>
      <Ant30Page />
    </>
  )
}

export default Ant30