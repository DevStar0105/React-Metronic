/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const FaqPage: React.FC = () => {
  return (
    <>
      <div className="accordion" id="kt_accordion_1">
        <div className="accordion-item">
          <h2 className="accordion-header" id="kt_accordion_1_header_1">
            <button
              className="accordion-button fs-4 fw-bold collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_1_body_1"
              aria-expanded="false"
              aria-controls="kt_accordion_1_body_1"
            >
              What is Qolony?
            </button>
          </h2>
          <div
            id="kt_accordion_1_body_1"
            className="accordion-collapse collapse"
            aria-labelledby="kt_accordion_1_header_1"
            data-bs-parent="#kt_accordion_1"
          >
            <div className="accordion-body">
              <strong>Qolony</strong> is a platform for all sorts of investors and entrepreneurs.
              Our aim is to democratize investments by providing our members access to worldwide wetted opportunities.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="kt_accordion_1_header_2">
            <button
              className="accordion-button fs-4 fw-bold collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_1_body_2"
              aria-expanded="false"
              aria-controls="kt_accordion_1_body_2"
            >
              What is AntVenture?
            </button>
          </h2>
          <div
            id="kt_accordion_1_body_2"
            className="accordion-collapse collapse"
            aria-labelledby="kt_accordion_1_header_2"
            data-bs-parent="#kt_accordion_1"
          >
            <div className="accordion-body">
              An <strong>AntVenture</strong> is an investing opportunity.
              You can find them by navigating through the AntVentures section of the app
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="kt_accordion_1_header_3">
            <button
              className="accordion-button fs-4 fw-bold collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_1_body_3"
              aria-expanded="false"
              aria-controls="kt_accordion_1_body_3"
            >
              What is a Nest?
            </button>
          </h2>
          <div
            id="kt_accordion_1_body_3"
            className="accordion-collapse collapse"
            aria-labelledby="kt_accordion_1_header_3"
            data-bs-parent="#kt_accordion_1"
          >
            <div className="accordion-body">
              A <strong>Nest</strong> is a feature of Qolony that can be used by a known entity (like a bank) or a professional investor to create a community.
              Any user can request to join a given Nest to gain access to their different benefits, such as exclusive investment opportunities.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {FaqPage}