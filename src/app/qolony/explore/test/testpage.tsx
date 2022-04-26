/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../../_metronic/helpers'

const TestPage: React.FC = () => {
  return (
    <>
      <div>
        <div className='position-relative'>
          <img className='w-100' src={toAbsoluteUrl('/media/ventures/rock01.jpg')} alt="" />
          <h1 className='position-absolute' style={{bottom: '2rem', left: '2rem', color: 'white', fontSize: '3rem'}}>test de link noticia</h1>
        </div>
        <div className='p-8 shadow rounded' style={{fontSize: '2rem'}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas at nisi vel turpis scelerisque iuctus et ut risus.
            Aliquam ultricies purus faucibus velit conque efficitur, Nam ut urna egestas, cursus mauris sit, amet, ternpor ex.
            Suspendisse potenti.
            Maecenas vehicula erat in fringilla <span>blandit. Aliquam</span> consectetur, ligula eget vestibulum <span>tincidunt</span>, mi eros imperdiet leo, id varius nunc enim sit amet dolor.
            Praesent purus risus, faucibus et accumsan nec, rhoncus in tortor.
            Aenean imperdiet eleifend mi vitae pulvinar.
            Etiam eu laoreet justo.
            Vivamus facilisis, justo accumsan consectetur mattis, sapien nunc molestie lacus, eget mattis nisi eros eu augue.
          </p>
          <p>https://www.marca.com</p>
          <p>www.marca.com</p>
        </div>
      </div>
    </>
  )
}

export {TestPage}