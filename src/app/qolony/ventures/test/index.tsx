/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import { TestPage } from './testpage'

const Test: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Test</PageTitle>
      <TestPage />
    </>
  )
}

export default Test