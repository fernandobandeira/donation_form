import React, {Component} from 'react'
import { connect } from 'react-redux'

import { setInformation } from '../../actions'
import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

class InformationPage extends Component {
  state = {
    anonymous: false,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    receive_updates: false,
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

  onAnonymousChange = () => {
    this.setState({
      anonymous: !this.state.anonymous,
    });
  }

  onReceiveUpdatesChange = () => {
    this.setState({
      receive_updates: !this.state.receive_updates,
    });
  }

  validate = (field='', all=false) => {
    let errors = {}
    let re = ''
    let name = ''
    if (!all) {
       name = field.target.name
    }

    if (all || name === 'first_name') {
      if (this.state.first_name.length < 2) {
        errors['first_name'] = true        
      }
    }
    if (all || name === 'last_name') {
      if (this.state.last_name.length < 2) {
        errors['last_name'] = true        
      }
    }
    if (all || name === 'email') {
      //validate email according to RFC 2822. 
      re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.state.email)) {
        errors['email'] = true
      }
    }
    if (all || name === 'phone') {
      //accepts (123) 123-1234 or 123 123-1234.
      re = /^(\()?\d{3}(\))?(\s)?\d{3}(-)\d{4}$/
      if (!re.test(this.state.phone)) {
        errors['phone'] = true
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
      this.props.setInformation(this.state)
      this.props.history.push(`/modal/payment`)
    }
  }

  componentWillMount() {
    if (this.props.form) {
      this.setState({
        ...this.props.form,
      })
    }

    if (!this.props.form.chooseAmount) {
      this.props.history.push(`/modal/`)
    }
  }

  render() {
    const { 
      submit,
      onReceiveUpdatesChange,
      onInputChange,
      onAnonymousChange,
      validate,
      isInvalid,
    } = this

    return (
      <div className="modal-content">
        <ModalHeaderComponent title='Information' step={2} previous='/modal/' next={submit} />
        <div className="modal-body">          
          <form>
            <div className='form-check md-space'>
                <input 
                  type='checkbox' 
                  className='form-check-input' 
                  name='anonymous' 
                  id='anonymous'
                  defaultChecked={this.state.anonymous}
                  onChange={onAnonymousChange}/>
                <label className='form-check-label' htmlFor='anonymous'>Make an anonymous donation</label>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='first_name'>First Name</label>
                  <input 
                    type='text' 
                    className={isInvalid('first_name')}
                    name='first_name'
                    id='first_name' 
                    defaultValue={this.state.first_name}  
                    onBlur={validate}
                    onChange={onInputChange}/>
                  {this.state.anonymous && (
                    <small className="form-text text-muted">Your name will not be stored.</small>     
                  )}                  
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='last_name'>Last Name</label>
                  <input 
                    name='last_name'
                    type='text' 
                    className={isInvalid('last_name')}
                    id='last_name' 
                    defaultValue={this.state.last_name}  
                    onBlur={validate}
                    onChange={onInputChange}/>
                  {this.state.anonymous && (
                    <small className="form-text text-muted">Your name will not be stored.</small>     
                  )}  
                </div>
              </div>
            </div>            
            <div className='form-group'>
              <label htmlFor='email'>Email for receipt</label>
              <input 
                type='email' 
                name='email'
                className={isInvalid('email')}
                id='email' 
                defaultValue={this.state.email}  
                onBlur={validate}
                onChange={onInputChange}/>
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input 
                type='tel'
                name='phone'
                className={isInvalid('phone')}
                onBlur={validate}
                defaultValue={this.state.phone}  
                id='phone' 
                onChange={onInputChange}/>
            </div>
            <div className='form-check'>
                <input 
                  type='checkbox' 
                  className='form-check-input' 
                  name='receive_updates' 
                  id='receive_updates'
                  defaultChecked={this.state.receive_updates}
                  onChange={onReceiveUpdatesChange}/>
                <label className='form-check-label' htmlFor='receive_updates'>Receive email updates</label>
            </div>
          </form>
        </div>
        <ModalFooterComponent next={submit}/>
      </div>
    )
  }
}

const mapStateToProps = ({form}, ownProps) => ({
  form,
})

const mapDispatchToProps = dispatch => ({
  setInformation: (form) => dispatch(setInformation(form)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InformationPage)
