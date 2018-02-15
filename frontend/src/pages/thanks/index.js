import React, { Component } from 'react'

import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

class ThanksPage extends Component {
  close = () => {
    this.props.history.push(`/`)
  }

  render() {
    const { close } = this

    return (
      <div className="modal-content">
        <ModalHeaderComponent title='Success' />
        <div className="modal-body">
          Thanks for your donation!
        </div>      
        <ModalFooterComponent 
          next={close}
          close={true}
          text={'List donations'}/>  
      </div>
    )
  }
}

export default ThanksPage
