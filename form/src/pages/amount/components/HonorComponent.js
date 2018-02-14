import React from 'react'
import './HonorComponent.css'

const HonorComponent = function () {
  return (
    <div className='honor'>
      <div>        
        <form>
            <div class='form-check'>
                <input type='checkbox' class='form-check-input' name='honor' id='honor'/>
                <label class='form-check-label' for='honor'>Donate in honor or memory of someone</label>
            </div>
            <div class='form-group'>
                <label for='name'>Full Name</label>
                <input type='email' class='form-control' id='name' aria-describedby='emailHelp'/>                
            </div>
            <div class='form-group'>
                <label for='comment'>Comment</label>
                <input type='text' class='form-control' id='comment'/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default HonorComponent
