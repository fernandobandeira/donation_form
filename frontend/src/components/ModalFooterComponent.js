import React from 'react'
import './ModalFooterComponent.css'

const ModalFooterComponent = function ({ next, text='Next' }) {
  return (
    <div className="modal-footer justify-content-center">
      <button className="btn btn-primary next" type="button" onClick={next}>{text}</button>
    </div>
  )
}

export default ModalFooterComponent
