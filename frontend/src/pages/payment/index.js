import React, {Component} from 'react'
import { connect } from 'react-redux'

import { setPayment } from '../../actions'
import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

class PaymentPage extends Component {
  state = {
    card_number: '',
    cvv: '',
    expiration: '',
    errors: {},
  }

  onInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: false,
      }
    })
  }

  validate = (field='', all=false) => {
    let errors = {}
    let re = ''
    let name = ''
    if (!all) {
       name = field.target.name
    }

    if (all || name === 'card_number') {
      //accepts 1234 1234 1234 1234
      re = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
      if (!re.test(this.state.card_number)) {
        errors['card_number'] = true        
      }
    }
    if (all || name === 'cvv') {
      if (this.state.cvv.length < 3) {
        errors['cvv'] = true 
      }
    }
    if (all || name === 'expiration') {
      let [month=0, year=0] = this.state.expiration.split("/")
      year = '20' + year
      const current = (new Date())
      const cyear = current.getFullYear()
      const cmonth = current.getMonth() + 1      

      if (year < cyear || (year == cyear && month < cmonth)) {
        errors['expiration'] = true        
      }
    }

    if (errors) {
      this.setState({
        errors: {
          ...this.state.errors,
          ...errors,
        }
      })
    }

    return Object.keys(errors).length !== 0
  }

  isInvalid = (name) => {
    return 'form-control ' + (this.state.errors[name] ? 'is-invalid' : '') 
  }

  submit = () => {
    const errors = this.validate('', true)
    
    if (!errors) {
      this.props.setPayment(this.state)
      this.props.history.push(`/thanks`)
    }
  }

  componentWillMount() {
    if (this.props.form) {
      this.setState({
        ...this.props.form,
      })
    }
  }

  render() {
    const {
      validate,
      onInputChange,
      isInvalid,
      submit,
    } = this

    return (
      <div className="modal-content">
        <ModalHeaderComponent title='Payment' step={3} previous='/information' next={submit} />
        <div className="modal-body">
          <form>
            <div className='form-group'>
              <label htmlFor='card_number'>Card Number</label>
              <input 
                type='text' 
                className={isInvalid('card_number')}
                name='card_number'
                defaultValue={this.state.card_number}  
                onBlur={validate}
                onChange={onInputChange}
                id='card_number'/>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='cvv'>CVV</label>
                  <input 
                    type='text' 
                    className={isInvalid('cvv')}
                    name='cvv'
                    defaultValue={this.state.cvv}  
                    onBlur={validate}
                    onChange={onInputChange}
                    id='cvv'/>                
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='expiration'>Expiration MM/YY</label>
                  <input 
                    type='text' 
                    className={isInvalid('expiration')}
                    name='expiration'
                    defaultValue={this.state.expiration}  
                    onBlur={validate}
                    onChange={onInputChange}
                    id='expiration'/>
                </div>
              </div>
            </div>
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
  setPayment: (form) => dispatch(setPayment(form)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage)
