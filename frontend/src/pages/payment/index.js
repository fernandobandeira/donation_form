import React, {Component} from 'react'

import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

class PaymentPage extends Component {
  render() {
    return (
      <div className="modal-content">
        <ModalHeaderComponent title='Payment' step={3} />
        <div className="modal-body">
          <form>
            <div className='form-group'>
              <label htmlFor='card'>Card Number</label>
              <input type='text' className='form-control' id='card'/>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='cvv'>CVV</label>
                  <input type='text' className='form-control' id='cvv'/>                
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='expiration'>Expiration MM/YY</label>
                  <input type='text' className='form-control' id='expiration'/>
                </div>
              </div>
            </div>
          </form>
        </div>
        <ModalFooterComponent link='/thanks'/>
      </div>
    )
  }
}

export default PaymentPage
