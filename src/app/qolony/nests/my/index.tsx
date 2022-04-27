/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import { MyNestsPage } from './mynestspage'

const MyNests: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>My Nests</PageTitle>
      <MyNestsPage />
    </>
  )
}

export {MyNests}