import React, {Component} from 'react'

import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

import './style.css'

class AmountPage extends Component {
  state = {
    honor: false,
  }

  onHonorChange = () => {
    this.setState({
      honor: !this.state.honor,
    });
  }

  render() {
    return (
      <div className="modal-content">
        <ModalHeaderComponent title='Choose Amount' step={1} />
        <div className="modal-body">
          <div className='amount'>
            <div className='btn-group' data-toggle='buttons'>
              <label className='btn btn-primary active'>
                <input type='radio' name='amount' value='1000' defaultChecked/>
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
          <div className='frequency'>
            <div>
              <span>Donation Frequency</span>
            </div>
            <div className='btn-group' data-toggle='buttons'>
              <label className='btn btn-primary active'>
                <input type='radio' name='frequency' value='quarterly' defaultChecked/>
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
          <form>
            <div className='form-check'>
                <input type='checkbox' className='form-check-input' name='honor' id='honor' onChange={this.onHonorChange}/>
                <label className='form-check-label' htmlFor='honor'>Donate in honor or memory of someone</label>
            </div>
            {this.state.honor && (
              <div>
                <div className='form-group'>
                  <label htmlFor='name'>Full Name</label>
                  <input type='text' className='form-control' id='name' aria-describedby='emailHelp'/>                
                </div>
                <div className='form-group'>
                  <label htmlFor='comment'>Comment</label>
                  <input type='text' className='form-control' id='comment'/>
                </div>
              </div>
            )}
          </form>
        </div>
        <ModalFooterComponent link='/donor'/>
      </div>
    )
  }
}

export default AmountPage
