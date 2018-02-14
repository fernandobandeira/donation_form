import React, {Component} from 'react'

import ModalHeaderComponent from '../../components/ModalHeaderComponent'
import AmountComponent from './components/AmountComponent'
import FrequencyComponent from './components/FrequencyComponent'
import HonorComponent from './components/HonorComponent'
import ModalFooterComponent from '../../components/ModalFooterComponent'

class AmountPage extends Component {
  render() {
    return (
      <div className="modal-content">
        <ModalHeaderComponent/>
        <div className="modal-body">
          <AmountComponent/>
          <FrequencyComponent/>
          <HonorComponent/>
        </div>
        <ModalFooterComponent/>
      </div>
    )
  }
}

export default AmountPage
