/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../../_metronic/helpers'

const Ant30Page: React.FC = () => {
  return (
    <>
      <div style={{backgroundImage: 'linear-gradient(rgba(61, 70, 145, 1), rgba(61, 70, 145, 0))'}}>
        <div className="symbol-group symbol-hover">
          <div className="symbol symbol-circle symbol-100px mb-10">
            <img src={toAbsoluteUrl("/media/avatars/150-2.jpg")} alt="" />
          </div>
          <div className="mb-8" style={{marginLeft: '2rem'}}>
            <p className='text-white' style={{fontSize: '4rem'}}>Ant-30</p>
          </div>
        </div>
        <div>
          <h1 className='text-white' style={{fontSize: '5rem'}}>VEnture de Ruben</h1>
          <p className='text-gray-400' style={{fontSize: '3rem'}}>Other Collectibies</p>
        </div>
        <div>
          <div className='bg-primary rounded h-20px mb-2' role="progressbar" style={{width: '100%'}}></div>
          <div className='bg-success rounded h-20px' role="progressbar" style={{width: '10%'}}></div>
        </div>
        <div className="d-flex flex-row">
          <li className="d-flex align-items-center py-2">
            <span className="bullet me-5"></span>Item 1
          </li>
          <li className="d-flex align-items-center py-2">
            <span className="bullet me-5"></span>Item 2
          </li>
        </div>
      </div>
    </>
  )
}

export {Ant30Page}