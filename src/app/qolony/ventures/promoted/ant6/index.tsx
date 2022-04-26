/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../../_metronic/helpers'
import { PageTitle } from '../../../../../_metronic/layout/core'
import { Ant6Page } from './ant6dpage'

const Ant6: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Ant 6</PageTitle>
      <Ant6Page />
    </>
  )
}

export default Ant6