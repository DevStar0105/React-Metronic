/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../../_metronic/helpers'

const Ant1Page: React.FC = () => {
  return (
    <>
      <div className='p-8' style={{backgroundImage: 'linear-gradient(rgba(61, 70, 145, 1), rgba(61, 70, 145, 0))'}}>
        <div className="symbol-group symbol-hover">
          <div className='col-md-2'>
            <div className="symbol symbol-circle symbol-100px mb-10">
              <img src={toAbsoluteUrl("/media/ventures/rocket.png")} alt="" />
            </div>
          </div>
          <div className="mb-8 col-md-9">
            <p className='text-white' style={{fontSize: '4rem'}}>Ant-1</p>
          </div>
          <div className='col-md-1' style={{marginBottom: '3rem'}}>
            <i className="bi bi-heart fs-1 text-white"></i>
          </div>
        </div>
        <div>
          <h1 className='text-white' style={{fontSize: '2.5rem'}}>Prueba texto largo para probar que se salga del box o no</h1>
          <p className='text-gray-400' style={{fontSize: '2rem'}}>StartUps</p>
        </div>
        <div className='mb-8'>
          <div className='bg-primary rounded h-20px mb-2' role="progressbar" style={{width: '100%'}}></div>
          <div className='bg-success rounded h-20px' role="progressbar" style={{width: '10%'}}></div>
        </div>
        <div className="d-flex flex-row mb-8 text-gray-100" style={{fontSize: '2rem'}}>
          <li className="d-flex align-items-center py-2 me-5">
            <span className="bullet bullet-dot h-15px w-15px bg-success me-3"></span>Invested
          </li>
          <li className="d-flex align-items-center py-2">
            <span className="bullet bullet-dot h-15px w-15px bg-primary me-3"></span>Allocated
          </li>
        </div>
        <div className='flex-row mb-8 text-gray-100'>
          <img className='w-50px h-50px me-4' src={toAbsoluteUrl('/media/icons/duotune/general/user-group.png')} style={{borderRadius: '50%'}} alt="" />
          <span style={{fontSize: '2.5rem', verticalAlign: 'middle'}}>1 Ants</span>
          <span style={{fontSize: '2.5rem', verticalAlign: 'middle', float: 'right'}}>2000.00€ from 120,000.00€</span>
        </div>
        <div className='mb-12'>
          <div className='d-flex flex-row bg-white' style={{borderRadius: '2.5rem'}}>
            <div className='col-md-4 p-8 text-center'>
              <h1 className='m-0'>1.0k</h1>
              <p className='m-0' style={{fontSize: '1.5rem'}}>Min. invest</p>
            </div>
            <div className='col-md-4 p-8 text-center'>
              <h1 className='m-0' style={{borderLeft: '1px solid gray', borderRight: '1px solid gray'}}>30%</h1>
              <p className='m-0' style={{fontSize: '1.5rem', borderLeft: '1px solid gray', borderRight: '1px solid gray'}}>Expected roi</p>
            </div>
            <div className='col-md-4 p-8 text-center'>
              <h1 className='m-0'>0 days</h1>
              <p className='m-0' style={{fontSize: '1.5rem'}}>left</p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center mb-12'>
          <h1 className='text-primary' style={{fontSize: '2rem'}}>You Reserved 1000€</h1>
        </div>
        <div className='mb-20'>
          <h1 className='mb-20' style={{fontSize: '2.5rem'}}>About the project</h1>
          <p style={{fontSize: '1.5rem'}}>Esto es una prueba de <span style={{textDecoration: 'underline', color: '#26c7bf'}}>geometic</span> para la informacion del venture.</p>
        </div>
        <div>
          <img className='w-100px' src={toAbsoluteUrl("/media/icons/duotune/files/fil004.svg")} />
          <p className='w-150px' style={{fontSize: '1.5rem', marginLeft: '1.5rem'}}>Screenshot 2021-03-03 at 10.56.02</p>
        </div>
      </div>
    </>
  )
}

export {Ant1Page}