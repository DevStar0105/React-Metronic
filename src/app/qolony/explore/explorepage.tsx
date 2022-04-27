/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_metronic/helpers'

const ExplorePage: React.FC = () => {
  return (
    <>
      {/* detail start */}
      <div className='row shadow p-3 mb-5 bg-white rounded align-items-center'>
        <div className='col-md-4 p-8'>
          <img src={toAbsoluteUrl('/media/ventures/rock01.jpg')} alt="" style={{borderRadius: '2rem', width: '100%'}} />
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-11'>
              <Link to='/explore/promoted/ant6'><h2 className='link-primary' style={{fontSize: '2rem'}}>Nest Venture Private</h2></Link>
            </div>
            <div className='col-md-1'>
              <Link to='/favorite'><i className='bi bi-heart' style={{fontSize: '2rem'}}></i></Link>
            </div>
          </div>
          <div className='row'>
            <div className='w-100 mb-5' data-bs-toggle='tooltip'>
              <p style={{fontSize: '1.3rem'}} className='text-grey'>by Ant-6</p>
              <div className='bg-primary rounded h-20px mb-2' role="progressbar" style={{width: '100%'}}></div>
              <div className='bg-success rounded h-20px' role="progressbar" style={{width: '10%'}}></div>
              <h2 className='mt-4'>7000 from 120000</h2>
            </div>
          </div>
        </div>
      </div>
      {/* detail end */}

      {/* detail start */}
      <div className='row shadow p-3 mb-5 bg-white rounded align-items-center'>
        <div className='col-md-4 p-8'>
          <img src={toAbsoluteUrl('/media/ventures/rock02.jpg')} alt="" style={{borderRadius: '2rem', width: '100%'}} />
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-11'>
              <Link to='/explore/promoted/ant16'><h2 className='link-primary' style={{fontSize: '2rem'}}>Prueba</h2></Link>
            </div>
            <div className='col-md-1'>
              <Link to='/favorite'><i className='bi bi-heart' style={{fontSize: '2rem'}}></i></Link>
            </div>
          </div>
          <div className='row'>
            <div className='w-100 mb-5' data-bs-toggle='tooltip'>
              <p style={{fontSize: '1.3rem'}} className='text-grey'>by Ant-16</p>
              <div className='bg-primary rounded h-20px mb-2' role="progressbar" style={{width: '0.5%'}}></div>
              <div className='bg-success rounded h-20px' role="progressbar" style={{width: '5%'}}></div>
              <h2 className='mt-4'>5000 from 120000</h2>
            </div>
          </div>
        </div>
      </div>
      {/* detail end */}

      {/* detail start */}
      <div className='row shadow p-3 mb-5 bg-white rounded align-items-center'>
        <div className='col-md-4 p-8'>
          <img src={toAbsoluteUrl('/media/ventures/rock01.jpg')} alt="" style={{borderRadius: '2rem', width: '100%'}} />
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-11'>
              <Link to='/explore/promoted/ant1'><h2 className='link-primary' style={{fontSize: '2rem'}}>Prueba texto largo para probar que se salga del box o no</h2></Link>
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
              <h2 className='mt-4'>2000 from 120000</h2>
            </div>
          </div>
        </div>
      </div>
      {/* detail end */}

      {/* detail start */}
      <div className='row shadow p-3 mb-5 bg-white rounded align-items-center'>
        <div className='col-md-4 p-8'>
          <img src={toAbsoluteUrl('/media/ventures/rock02.jpg')} alt="" style={{borderRadius: '2rem', width: '100%'}} />
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-11'>
              <Link to='/explore/promoted/ant30'><h2 className='link-primary' style={{fontSize: '2rem'}}>VEnture de Ruben</h2></Link>
            </div>
            <div className='col-md-1'>
              <Link to='/favorite'><i className='bi bi-heart' style={{fontSize: '2rem'}}></i></Link>
            </div>
          </div>
          <div className='row'>
            <div className='w-100 mb-5' data-bs-toggle='tooltip'>
              <p style={{fontSize: '1.3rem'}} className='text-grey'>by Ant-30</p>
              <div className='bg-primary rounded h-20px mb-2' role="progressbar" style={{width: '100%'}}></div>
              <div className='bg-success rounded h-20px' role="progressbar" style={{width: '10%'}}></div>
              <h2 className='mt-4'>760 from 2000</h2>
            </div>
          </div>
        </div>
      </div>
      {/* detail end */}

      {/* first cell start */}
      <div className='row shadow mb-5 bg-white rounded align-items-center'>
        <img className='rounded mb-5' src={toAbsoluteUrl('/media/ventures/rocket.jpg')} alt="" style={{padding: '0px'}} />
        <div>
          <div className='row'>
            <Link to='/explore/saludo'><h2 className='link-primary' style={{fontSize: '2rem'}}>Saludo</h2></Link>
          </div>
          <div>
            <p>unt in culpa qui officia deserunt mollit anim id est laborum consectetur adlpiscling elit, sed do...al;fdjasd;fjasd;fjasdlfasdfkjasdlfeqkd asldfjlasd aldefjdlvd falfjalsdfe4adjfl asldfjasldf9easd aldsjfladsj alsdkfjalds fjalsdjfla jsdflajsdlf alsdjfl asldkjfla sdfla lsdfj lasdjfl alsd</p>
          </div>
        </div>
      </div>
      {/* first cell end */}

      {/* second cell start */}
      <div className='row shadow mb-5 bg-white rounded align-items-center'>
        <img className='rounded mb-5' src={toAbsoluteUrl('/media/ventures/rock02.jpg')} alt="" style={{padding: '0px'}} />
        <div>
          <div className='row'>
            <Link to='/explore/test'><h2 className='link-primary' style={{fontSize: '2rem'}}>test de link noticia</h2></Link>
          </div>
          <div>
            <p>unt in culpa qui officia deserunt mollit anim id est laborum consectetur adlpiscling elit, sed do...al;fdjasd;fjasd;fjasdlfasdfkjasdlfeqkd asldfjlasd aldefjdlvd falfjalsdfe4adjfl asldfjasldf9easd aldsjfladsj alsdkfjalds fjalsdjfla jsdflajsdlf alsdjfl asldkjfla sdfla lsdfj lasdjfl alsd</p>
          </div>
        </div>
      </div>
      {/* second cell end */}
    </>
  )
}

export {ExplorePage}