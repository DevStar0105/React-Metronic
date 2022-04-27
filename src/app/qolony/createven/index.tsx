/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { CreateVenturePage } from './createventurepage'

const CreateVenture: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Create Venture</PageTitle>
      <CreateVenturePage />
    </>
  )
}

export {CreateVenture}