/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../_metronic/helpers'

const CreateVenturePage: React.FC = () => {
  return (
    <>
      <div className='shadow rounded p-8'>
        <form action="">
          <div className='mb-8'>
            <input type="text" placeholder='Name' className='form-control form-control-lg form-control-solid' />
          </div>
          <div className='mb-8'>
            <input type="text" placeholder='Capital required' className='form-control form-control-lg form-control-solid' />
          </div>
          <div className='mb-8'>
            <textarea name="" id="" className='form-control form-control-lg form-control-solid' placeholder='About' style={{height: '30rem'}}></textarea>
          </div>
          <div>
            <button className='btn btn-primary w-100'>Send create request</button>
          </div>
        </form>
      </div>
    </>
  )
}

export {CreateVenturePage}