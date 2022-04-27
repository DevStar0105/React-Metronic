/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { MyVenturesPage } from './myventurespage'

const MyVentures: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>My Ventures</PageTitle>
      <MyVenturesPage />
    </>
  )
}

export {MyVentures}