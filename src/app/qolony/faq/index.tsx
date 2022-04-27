/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { FaqPage } from './faqpage'

const Faq: React.FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>FAQ</PageTitle>
      <FaqPage />
    </>
  )
}

export {Faq}