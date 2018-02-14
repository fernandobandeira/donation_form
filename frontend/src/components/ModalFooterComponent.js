import React from 'react'
import './ModalFooterComponent.css'

const ModalFooterComponent = function ({ next }) {
  return (
    <div className="modal-footer justify-content-center">
      <button className="btn btn-primary next" type="button" onClick={next}>Next</button>
    </div>
  )
}

export default ModalFooterComponent
