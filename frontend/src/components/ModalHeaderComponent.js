import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ModalHeaderComponent.css'

class ModalHeaderComponent extends Component {
  checkDisabled(link) {
    return 'btn btn-outline-primary nextstep ' + 
      (link ? '' : 'disabled')
  }

  render() {
    const { title, step=0, previous, next } = this.props

    return (
      <div className="modal-header">
        <Link to={previous || '#'}>
          <button
            aria-label="back"
            className={this.checkDisabled(previous)}
            type="button">
            <img src="./img/svg/arrow_left.svg" alt="back"/>
          </button>
        </Link>
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
          className={this.checkDisabled(next)}
          onClick={next}         
          type="button">
          <img src="./img/svg/arrow_right.svg" alt="forward"/>
        </button>        
      </div>
    )
  }
}

export default ModalHeaderComponent
