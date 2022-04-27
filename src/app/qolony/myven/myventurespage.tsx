/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const MyVenturesPage: React.FC = () => {
  return (
    <>
      <div style={{display: 'grid', placeItems: 'center', marginTop: '30vh', fontSize: '2rem'}}>
        <i className='bi bi-exclamation-circle' style={{fontSize: '2rem'}}></i>You don't have ventures at this moment.
      </div>
    </>
  )
}

export {MyVenturesPage}