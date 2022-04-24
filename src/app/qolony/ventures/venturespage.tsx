/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../_metronic/helpers'

const VenturesPage: React.FC = () => {
  return (
    <>
      <div className='shadow rounded p-8'>
        <div className='mb-6'>
          <img className='w-100px h-100px' src={toAbsoluteUrl('/media/ventures/rock01.jpg')} alt="" style={{borderRadius: '50%'}} />
          <img className='w-100px h-100px' src={toAbsoluteUrl('/media/ventures/rocket.png')} alt="" style={{marginLeft: '1rem'}} />
        </div>
        <div style={{marginLeft: '1rem'}}>
          <p style={{fontSize: '1.3rem', marginBottom: '0px'}} className='badge badge-danger'>Promoted</p>
        </div>
      </div>
      {/* first cell start */}
      <div className='mt-8 shadow rounded'>
        <div className='row'>
          <h1 className='text-center' style={{fontSize: '14rem', letterSpacing: '5rem'}}>TEST</h1>
        </div>
        <div className=' mt-4' style={{marginLeft: '3rem'}}>
          <div className='row'>
            <div className='col-md-11'>
              <Link to='/'><h2 className='link-primary' style={{fontSize: '2.5rem'}}>VEnture de Ruben</h2></Link>
            </div>
            <div className='col-md-1 mt-4'>
              <Link to='/favorite'><i className='bi bi-heart' style={{fontSize: '2.5rem'}}></i></Link>
            </div>
          </div>
          <div className='row'>
            <div className='w-100 mb-5' data-bs-toggle='tooltip'>
              <p style={{fontSize: '1.3rem'}} className='text-grey'>by Ant-30</p>
              <div className='bg-success rounded h-20px' role="progressbar" style={{width: '10%'}}></div>
              <h2 className='mt-4'>760.00 from 2,000.00</h2>
            </div>
          </div>
        </div>
        <div style={{marginLeft: '1rem'}}>
          <p style={{fontSize: '1.3rem'}} className='badge badge-danger'>Promoted</p>
        </div>
      </div>
      {/* first cell end */}

      {/* second cell start */}
      <div className='mt-8'>
        <div className='row'>
          <img src={toAbsoluteUrl('/media/ventures/rock01.jpg')} alt="" style={{borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem'}} />
        </div>
        <div className='shadow rounded pt-4' style={{paddingLeft: '3rem'}}>
          <div className='row'>
            <div className='col-md-11'>
              <Link to='/'><h2 className='link-primary' style={{fontSize: '2.5rem'}}>Nest Venture Private</h2></Link>
            </div>
            <div className='col-md-1 mt-4'>
              <Link to='/favorite'><i className='bi bi-heart' style={{fontSize: '2.5rem'}}></i></Link>
            </div>
          </div>
          <div className='row'>
            <div className='w-100 mb-5' data-bs-toggle='tooltip'>
              <p style={{fontSize: '1.3rem'}} className='text-grey'>by Ant-6</p>
              <div className='bg-success rounded h-20px' role="progressbar" style={{width: '10%'}}></div>
              <h2 className='mt-4'>7,000.00 from 120,000.00</h2>
            </div>
          </div>
        </div>
      </div>
      {/* second cell end */}

      {/* detail start */}
      <div className='mt-8 pt-8 shadow rounded'>
        <div className='row'>
          <div className='col-md-4 p-8'>
            <img src={toAbsoluteUrl('/media/ventures/rock02.jpg')} alt="" style={{borderRadius: '2rem', width: '100%'}} />
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-11'>
                <Link to='/'><h2 className='link-primary' style={{fontSize: '2rem'}}>Prueba texto largo para probar que se salga del...</h2></Link>
              </div>
              <div className='col-md-1'>
                <Link to='/favorite'><i className='bi bi-heart' style={{fontSize: '2rem'}}></i></Link>
              </div>
            </div>
            <div className='row'>
              <div className='w-100 mb-5' data-bs-toggle='tooltip'>
                <p style={{fontSize: '1.3rem'}} className='text-grey'>by Ant-1</p>
                <div className='bg-primary rounded h-20px mb-2' role="progressbar" style={{width: '12%'}}></div>
                <div className='bg-success rounded h-20px' role="progressbar" style={{width: '10%'}}></div>
                <h2 className='mt-4'>2,000.00 from 120,000.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* detail end */}

      {/* detail start */}
      <div className='mt-8 pt-8 shadow rounded'>
        <div className='row'>
          <div className='col-md-4 p-8'>
            <img src={toAbsoluteUrl('/media/ventures/rock01.jpg')} alt="" style={{borderRadius: '2rem', width: '100%'}} />
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-11'>
                <Link to='/'><h2 className='link-primary' style={{fontSize: '2rem'}}>Prueba</h2></Link>
              </div>
              <div className='col-md-1'>
                <Link to='/favorite'><i className='bi bi-heart' style={{fontSize: '2rem'}}></i></Link>
              </div>
            </div>
            <div className='row'>
              <div className='w-100 bg-light mb-5' data-bs-toggle='tooltip'>
                <p style={{fontSize: '1.3rem'}} className='text-grey'>by Ant-16</p>
                <div className='bg-primary rounded h-20px mb-2' role="progressbar" style={{width: '1%'}}></div>
                <div className='bg-success rounded h-20px' role="progressbar" style={{width: '10%'}}></div>
                <h2 className='mt-4'>5,000.00 from 120,000.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* detail end */}
    </>
  )
}

export {VenturesPage}