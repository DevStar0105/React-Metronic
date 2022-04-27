/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'

const SaludoPage: React.FC = () => {
  return (
    <>
      <div>
        <div className='position-relative'>
          <img className='w-100' src={toAbsoluteUrl('/media/ventures/rocket.jpg')} alt="" />
          <h1 className='position-absolute' style={{bottom: '2rem', left: '2rem', color: 'white', fontSize: '3rem'}}>Saludo</h1>
        </div>
        <div className='p-8 shadow rounded' style={{fontSize: '2rem'}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas at nisi vel turpis scelerisque iuctus et ut risus.
            Aliquam ultricies purus faucibus velit conque efficitur, Nam ut urna egestas, cursus mauris sit, amet, ternpor ex.
          </p>
          <p>https://www.marca.com</p>
          <p>www.marca.com</p>
        </div>
        <div>
          <img className='w-100' src={toAbsoluteUrl('/media/ventures/computer.jpg')} alt="" />
        </div>
      </div>
    </>
  )
}

export {SaludoPage}