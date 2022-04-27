/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { ProfilePage } from './profilepage'

const Profile: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Profile</PageTitle>
      <ProfilePage />
    </>
  )
}

export {Profile}