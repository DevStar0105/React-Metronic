/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../../_metronic/helpers'
import { PageTitle } from '../../../../../_metronic/layout/core'
import { Ant16Page } from './ant16dpage'

const Ant16: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Ant 16</PageTitle>
      <Ant16Page />
    </>
  )
}

export default Ant16