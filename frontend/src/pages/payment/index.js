import React, {Component} from 'react'

import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

class PaymentPage extends Component {
  state = {
    anonymous: false,
  }

  onAnonymousChange = () => {
    this.setState({
      anonymous: !this.state.anonymous,
    });
  }

  render() {
    return (
      <div className="modal-content">
        <ModalHeaderComponent title='Information' step={2} />
        <div className="modal-body">
          <form>
            <div className='form-check'>
                <input type='checkbox' className='form-check-input' name='anonymous' id='anonymous' onChange={this.onAnonymousChange}/>
                <label className='form-check-label' htmlFor='anonymous'>Make an anonymous donation</label>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='first_name'>First Name</label>
                  <input type='text' className='form-control' id='first_name' aria-describedby='emailHelp'/>                
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='last_name'>Last Name</label>
                  <input type='text' className='form-control' id='last_name'/>
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email for receipt</label>
              <input type='email' className='form-control' id='email'/>
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input type='tel' className='form-control' id='phone'/>
            </div>
            <div className='form-check'>
                <input type='checkbox' className='form-check-input' name='updates' id='updates'/>
                <label className='form-check-label' htmlFor='updates'>Receive email updates</label>
            </div>
          </form>
        </div>
        <ModalFooterComponent link='/payment'/>
      </div>
    )
  }
}

export default PaymentPage
