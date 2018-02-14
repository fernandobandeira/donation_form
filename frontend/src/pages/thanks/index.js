import React, {Component} from 'react'

import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

class ThanksPage extends Component {
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

export default ThanksPage
