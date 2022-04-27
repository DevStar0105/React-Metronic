/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import { SaludoPage } from './saludopage'

const Saludo: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Saludo</PageTitle>
      <SaludoPage />
    </>
  )
}

export default Saludo