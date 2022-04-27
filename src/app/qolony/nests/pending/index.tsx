/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import { PendingNestsPage } from './pendingnestspage'

const PendingNests: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Pending Nests</PageTitle>
      <PendingNestsPage />
    </>
  )
}

export {PendingNests}