import React from 'react'
import { Link } from 'react-router-dom';
import './ModalFooterComponent.css'

const ModalFooterComponent = function ({ link }) {
  return (
    <div className="modal-footer justify-content-center">
      <Link to={link}>
        <button className="btn btn-primary next" type="button">Next</button>
      </Link>
    </div>
  )
}

export default ModalFooterComponent
