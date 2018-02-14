import React from 'react'
import './ModalHeaderComponent.css'

const ModalHeaderComponent = function () {
  return (
    <div className="modal-header">
      <button
        aria-label="back"
        className="btn btn-outline-primary nextstep disabled"
        type="button">
        <img src="./img/svg/arrow_left.svg" alt="back"/>
      </button>
      <p className="heading lead" style={{
        textAlign: 'left'
      }}>
        Choose Amount
      </p>
      <div className="heading-circles">
        <div className="circle filled"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
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
