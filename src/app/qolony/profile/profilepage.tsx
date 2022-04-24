/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl, KTSVG } from '../../../_metronic/helpers'

const ProfilePage: React.FC = () => {
  return (
    <>
      <div className='shadow rounded p-8'>
        <div className='row text-center'>
          <div className='mb-8'>
            <img style={{borderRadius: '50%'}} src={toAbsoluteUrl('/media/avatars/150-2.jpg')} alt="" />
          </div>
          <div className='mb-8'>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center'}}>Ant-48</p>
          </div>
        </div>
        <div className='row'>
          <div className='mb-8'>
            <h1>Personal Information</h1>
          </div>
          <div>
            <form action="">
              {/* begin::First Name */}
              <div className='fv-row mb-8'>
                <label className='class="form-label fw-bolder text-dark fs-6'>Name</label>
                <input
                  placeholder='Name'
                  type='text'
                  autoComplete='off'
                  // {...formik.getFieldProps('firstname')}
                  // className={clsx(
                  //   'form-control form-control-lg form-control-solid',
                  //   {
                  //     'is-invalid': formik.touched.firstname && formik.errors.firstname,
                  //   },
                  //   {
                  //     'is-valid': formik.touched.firstname && !formik.errors.firstname,
                  //   }
                  // )}
                  className='form-control form-control-lg form-control-solid'
                  defaultValue='test'
                />
                {/* {formik.touched.firstname && formik.errors.firstname && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.firstname}</span>
                    </div>
                  </div>
                )} */}
              </div>
              {/* end::First Name */}

              {/* begin::email */}
              <div className='fv-row mb-8'>
                <label className='class="form-label fw-bolder text-dark fs-6'>Email</label>
                <input
                  placeholder='Email'
                  type='email'
                  autoComplete='off'
                  // {...formik.getFieldProps('firstname')}
                  // className={clsx(
                  //   'form-control form-control-lg form-control-solid',
                  //   {
                  //     'is-invalid': formik.touched.firstname && formik.errors.firstname,
                  //   },
                  //   {
                  //     'is-valid': formik.touched.firstname && !formik.errors.firstname,
                  //   }
                  // )}
                  className='form-control form-control-lg form-control-solid'
                  defaultValue='qolony@test.com'
                />
                {/* {formik.touched.firstname && formik.errors.firstname && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.firstname}</span>
                    </div>
                  </div>
                )} */}
              </div>
              {/* end::email */}

              {/* begin::Mobile */}
              <div className='fv-row mb-8'>
                <label className='class="form-label fw-bolder text-dark fs-6'>Name</label>
                <input
                  placeholder='Enter Mobile Number'
                  type='text'
                  autoComplete='off'
                  // {...formik.getFieldProps('firstname')}
                  // className={clsx(
                  //   'form-control form-control-lg form-control-solid',
                  //   {
                  //     'is-invalid': formik.touched.firstname && formik.errors.firstname,
                  //   },
                  //   {
                  //     'is-valid': formik.touched.firstname && !formik.errors.firstname,
                  //   }
                  // )}
                  className='form-control form-control-lg form-control-solid'
                />
                {/* {formik.touched.firstname && formik.errors.firstname && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.firstname}</span>
                    </div>
                  </div>
                )} */}
              </div>
              {/* end::Mobile */}

              {/* begin::Form group */}
              <div className='text-center'>
                <button
                  type='submit'
                  id='kt_sign_up_submit'
                  className='btn btn-lg btn-primary w-100 mb-5'
                  // disabled={formik.isSubmitting || !formik.isValid}
                ><span className='indicator-label'>Update user info</span>
                  {/* {!loading && <span className='indicator-label'>Create Account</span>}
                  {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )} */}
                </button>
                <Link to='/logout' className='btn btn-danger btn-lg w-100 mb-5'>
                    Log Out
                </Link>
              </div>
              {/* end::Form group */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export {ProfilePage}