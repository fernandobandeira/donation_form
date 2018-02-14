import React, {Component} from 'react'
import { Route } from 'react-router-dom';

import AmountPage from './pages/amount'
import InformationPage from './pages/information'
import PaymentPage from './pages/payment'
import ThanksPage from './pages/thanks'

class App extends Component {
  componentDidMount() {
    window
      .$('#donationWidget')
      .modal()
  }

  render() {
    return (
      <div
        aria-hidden="true"
        aria-labelledby="donationWidget"
        className="modal fade"
        id="donationWidget"
        role="dialog"
        tabIndex="-1">
        <div className="modal-dialog" role="document">
          <Route exact path="/" component={AmountPage} />
          <Route exact path="/information" component={InformationPage} />
          <Route exact path="/payment" component={PaymentPage} />
          <Route exact path="/thanks" component={ThanksPage} />
        </div>
      </div>
    )
  }
}

export default App
