import React, {Component} from 'react'
import { connect } from 'react-redux'

import { chooseAmount } from '../../actions'
import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

import './style.css'

class AmountPage extends Component {
  state = {
    honor: false,
    amount: '1000',
    frequency: 'quarterly',
    honor_name: '',
    honor_comment: '',    
  }

  onHonorChange = () => {
    this.setState({
      honor: !this.state.honor,
    });
  }

  onAmountChange = (event) => {
    let amount = event.target.value
    if (!amount) {
      amount = '1000'
    } else if (amount < 5) {
      amount = '5'
    }

    this.setState({
      amount,
    })
  }

  onInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  isActive = (current, value) => {
    return 'btn btn-primary ' + (current === value ? 'active' : '')
  }

  submit = () => {
    this.props.chooseAmount(this.state)
    this.props.history.push(`/information`)
  }

  componentWillMount() {
    if (this.props.form) {
      this.setState({
        ...this.props.form,
      })
    }
  }

  render() {    
    const { isActive, onAmountChange, onInputChange, submit } = this

    return (
      <div className="modal-content">
        <ModalHeaderComponent title='Choose Amount' step={1} next={submit} />
        <div className="modal-body">          
          <div className='amount'>
            <div className='btn-group'>
              <label className={isActive(this.state.amount, '1000')}>
                <input type='radio' name='amount' value='1000' onChange={onAmountChange} />
                $1,000
              </label>
              <label className={isActive(this.state.amount, '500')}>
                <input type='radio' name='amount' value='500' onChange={onAmountChange}/>
                $500
              </label>
              <label className={isActive(this.state.amount, '250')}>
                <input type='radio' name='amount' value='250' onChange={onAmountChange}/>
                $250
              </label>
              <label className={isActive(this.state.amount, '100')}>
                <input type='radio' name='amount' value='100' onChange={onAmountChange}/>
                $100
              </label>
            </div>
            <input 
              type='number'
              min="5" 
              className='form-control other' 
              placeholder='Other'
              defaultValue={this.props.form.amount}
              onChange={onAmountChange}/>
          </div>
          <div className='frequency'>
            <div>
              <span className='md-space'>Donation Frequency</span>
            </div>
            <div className='btn-group'>
              <label className={isActive(this.state.frequency, 'quarterly')}>
                <input type='radio' name='frequency' value='quarterly' onChange={onInputChange} />
                Quarterly
              </label>
              <label className={isActive(this.state.frequency, 'monthly')}>
                <input type='radio' name='frequency' value='monthly' onChange={onInputChange}/>
                Monthly
              </label>
              <label className={isActive(this.state.frequency, 'weekly')}>
                <input type='radio' name='frequency' value='weekly' onChange={onInputChange}/>
                Weekly
              </label>
              <label className={isActive(this.state.frequency, 'one_time')}>
                <input type='radio' name='frequency' value='one_time' onChange={onInputChange}/>
                One Time
              </label>
            </div>
          </div>
          <form>
            <div className='form-check md-space'>
                <input type='checkbox' 
                  className='form-check-input' 
                  name='honor' 
                  id='honor'
                  defaultChecked={this.props.form.honor}
                  onChange={this.onHonorChange}/>
                <label 
                  className='form-check-label' 
                  htmlFor='honor'>Donate in honor or memory of someone</label>
            </div>
            {this.state.honor && (
              <div>
                <div className='form-group'>
                  <label htmlFor='honor_name'>Full Name</label>
                  <input 
                    type='text' 
                    className='form-control' 
                    name='honor_name' 
                    id='honor_name' 
                    defaultValue={this.state.honor_name} 
                    onChange={onInputChange}/>                
                </div>
                <div className='form-group'>
                  <label htmlFor='honor_comment'>Comment</label>
                  <input 
                    type='text' 
                    className='form-control' 
                    name='honor_comment' 
                    id='honor_comment' 
                    defaultValue={this.state.honor_comment}  
                    onChange={onInputChange}/>
                </div>
              </div>
            )}
          </form>
        </div>
        <ModalFooterComponent next={submit}/>
      </div>
    )
  }
}

const mapStateToProps = (form, ownProps) => ({
  form,
})

const mapDispatchToProps = dispatch => ({
  chooseAmount: (form) => dispatch(chooseAmount(form)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AmountPage)
