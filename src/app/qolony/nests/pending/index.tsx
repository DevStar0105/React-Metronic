/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../_metronic/helpers'
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