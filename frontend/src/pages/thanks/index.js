import React, {Component} from 'react'
import { connect } from 'react-redux'

import ModalHeaderComponent from '../../components/ModalHeaderComponent'

class ThanksPage extends Component {
  componentWillMount() {
    if (this.props.form) {
      this.setState({
        ...this.props.form,
      })
    }

    if (!this.props.form.setPayment) {
      this.props.history.push(`/payment`)
    }
  }

  render() {
    return (
      <div className="modal-content">
        <ModalHeaderComponent title='Success' />
        <div className="modal-body">
          Thanks for your donation!
        </div>        
      </div>
    )
  }
}

const mapStateToProps = (form, ownProps) => ({
  form,
})

export default connect(mapStateToProps)(ThanksPage)
