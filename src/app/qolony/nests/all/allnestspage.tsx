/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
import './styles.css'

const AllNestsPage: React.FC = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-6'>
          <div className="title-outer">
            <div className="title-image" style={{backgroundImage: 'url(' + toAbsoluteUrl('/media/ventures/rock02.jpg') + ')'}}></div>
            <div className="title-textbox">
                <div className="title-text text-center justify-content-center align-items-center" style={{display:'flex'}}>
                  <div>
                    <img src={toAbsoluteUrl('/media/avatars/150-5.jpg')} alt="" />
                    <p className='title'>Test Nest</p>
                    <i className='bi bi-people'></i><span>0</span><i className='bi bi-folder'></i><span>0</span>
                    <p className='description'>The Nest is The Nest</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className="title-outer">
            <div className="title-image" style={{backgroundImage: 'url(' + toAbsoluteUrl('/media/ventures/rock01.jpg') + ')'}}></div>
            <div className="title-textbox">
                <div className="title-text text-center justify-content-center align-items-center" style={{display:'flex'}}>
                  <div>
                    <img src={toAbsoluteUrl('/media/avatars/150-7.jpg')} alt="" />
                    <p className='title'>Santander</p>
                    <i className='bi bi-people'></i><span>3</span><i className='bi bi-folder'></i><span>1</span>
                    <p className='description'>We want your money</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export {AllNestsPage}