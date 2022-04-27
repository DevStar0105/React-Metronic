/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { FavoritesPage } from './favoritespage'

const Favorites: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Favorites</PageTitle>
      <FavoritesPage />
    </>
  )
}

export {Favorites}