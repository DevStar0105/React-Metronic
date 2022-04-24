/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import { VenturesPage } from './venturespage'

const Ventures: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Ventures</PageTitle>
      <VenturesPage />
    </>
  )
}

export {Ventures}