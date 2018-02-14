import React from 'react'
import './AmountComponent.css'

const AmountComponent = function () {
  return (
    <div className='amount'>
      <div className='btn-group' data-toggle='buttons'>
        <label className='btn btn-primary active'>
          <input type='radio' name='amount' value='1000' checked/>
          $1,000
        </label>
        <label className='btn btn-primary'>
          <input type='radio' name='amount' value='500'/>
          $500
        </label>
        <label className='btn btn-primary'>
          <input type='radio' name='amount' value='250'/>
          $250
        </label>
        <label className='btn btn-primary'>
          <input type='radio' name='amount' value='100'/>
          $100
        </label>
      </div>
      <input type='text' className='form-control other' placeholder='Other'/>
    </div>
  )
}

export default AmountComponent
