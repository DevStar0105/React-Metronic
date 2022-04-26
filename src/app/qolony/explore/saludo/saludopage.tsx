/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../_metronic/helpers'

const SaludoPage: React.FC = () => {
  return (
    <>
      <div>
        <div className='position-relative'>
          <img className='w-100' src={toAbsoluteUrl('/media/ventures/rocket.jpg')} alt="" />
          <h1 className='position-absolute' style={{bottom: '2rem', left: '2rem', color: 'white', fontSize: '3rem'}}>Saludo</h1>
        </div>
        <div className='p-8 shadow rounded'>
          <p style={{fontSize: '2rem'}}>
            Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur <span style={{textDecoration: 'underline', color: '#26c7bf'}}>adipiscing</span> elit, send do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <div>
          <img className='w-100' src={toAbsoluteUrl('/media/ventures/computer.jpg')} alt="" />
        </div>
      </div>
    </>
  )
}

export {SaludoPage}