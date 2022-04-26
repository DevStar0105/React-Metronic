/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../../_metronic/helpers'
import { PageTitle } from '../../../../../_metronic/layout/core'
import { Ant1Page } from './ant1dpage'

const Ant1: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Ant 1</PageTitle>
      <Ant1Page />
    </>
  )
}

export default Ant1