import React from 'react'
import './FrequencyComponent.css'

const FrequencyComponent = function () {
  return (
    <div className='frequency'>
      <div>
        <span>Donation Frequency</span>
      </div>
      <div className='btn-group' data-toggle='buttons'>
        <label className='btn btn-primary active'>
          <input type='radio' name='frequency' value='quarterly' checked/>
          Quarterly
        </label>
        <label className='btn btn-primary'>
          <input type='radio' name='frequency' value='monthly'/>
          Monthly
        </label>
        <label className='btn btn-primary'>
          <input type='radio' name='frequency' value='weekly'/>
          Weekly
        </label>
        <label className='btn btn-primary'>
          <input type='radio' name='frequency' value='one_time'/>
          One Time
        </label>
      </div>
    </div>
  )
}

export default FrequencyComponent
