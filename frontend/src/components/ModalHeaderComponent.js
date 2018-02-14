import React from 'react'
import './ModalHeaderComponent.css'

const ModalHeaderComponent = function ({ title, step=0 }) {
  return (
    <div className="modal-header">
      <button
        aria-label="back"
        className="btn btn-outline-primary nextstep disabled"
        type="button">
        <img src="./img/svg/arrow_left.svg" alt="back"/>
      </button>
      <p className="heading lead">
        { title }
      </p>
      {step !== 0 && (
        <div className="heading-circles">
          <div className={step === 1 ? 'circle filled' : 'circle'}></div>
          <div className={step === 2 ? 'circle filled' : 'circle'}></div>
          <div className={step === 3 ? 'circle filled' : 'circle'}></div>
        </div>
      )}
      <button
        aria-label="forward"
        className="btn btn-outline-primary nextstep"
        data-dismiss="modal"
        type="button">
        <img src="./img/svg/arrow_right.svg" alt="forward"/>
      </button>
    </div>
  )
}

export default ModalHeaderComponent
