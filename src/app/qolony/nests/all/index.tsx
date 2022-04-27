/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import { AllNestsPage } from './allnestspage'

const AllNests: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Nests</PageTitle>
      <AllNestsPage />
    </>
  )
}

export {AllNests}