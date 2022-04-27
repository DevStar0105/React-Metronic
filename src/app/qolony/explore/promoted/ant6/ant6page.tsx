/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'

const Ant6Page: React.FC = () => {
  return (
    <>
      <div>
        <div className="title-outer">
          <div className="title-image" style={{backgroundImage: 'url(' + toAbsoluteUrl('/media/ventures/rock01.jpg') + ')'}}></div>
          <div className="title-textbox">
              <div className="title-text text-center justify-content-center align-items-center" style={{display:'flex'}}>
                <div>
                  <img className='mb-8' src={toAbsoluteUrl('/media/avatars/150-7.jpg')} alt="" />
                  <div>
                    <i className='bi bi-people'></i><span>3</span><i className='bi bi-folder'></i><span>1</span>
                  </div>
                  <p className='title'>Santander</p>
                  <Link to='/' className='btn btn-light'><span style={{fontSize: '2rem'}}>Waiting for acceptance</span></Link>
                </div>
              </div>
          </div>
        </div>
        <div className='position-relative' style={{top: '420px'}}>
          <p className='text-center' style={{fontSize: '2rem'}}>We want your money</p>
        </div>
      </div>
    </>
  )
}

export {Ant6Page}