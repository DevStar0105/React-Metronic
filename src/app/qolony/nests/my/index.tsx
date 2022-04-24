/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../_metronic/helpers'
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