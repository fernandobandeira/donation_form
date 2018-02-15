import React from 'react'
import './ModalFooterComponent.css'

const ModalFooterComponent = function ({ next, text='Next', close=false }) {
  return (
    <div className="modal-footer justify-content-center">
      <button 
        className="btn btn-primary next" 
        type="button"
        data-dismiss={close ? 'modal' : ''}
        onClick={next}>{text}</button>
    </div>
  )
}

export default ModalFooterComponent
