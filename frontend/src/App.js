import React, {Component} from 'react'
import { Route } from 'react-router-dom';

import AmountPage from './pages/amount'
import InformationPage from './pages/information'
import PaymentPage from './pages/payment'
import ThanksPage from './pages/thanks'
import ListDonationsPage from './pages/list-donations'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ListDonationsPage} />
        <div
          aria-hidden="true"
          aria-labelledby="donationWidget"
          className="modal"
          id="donationWidget"        
          role="dialog"
          tabIndex="-1">
          <div className="modal-dialog" role="document">
            <Route exact path="/modal/" component={AmountPage} />
            <Route exact path="/modal/information" component={InformationPage} />
            <Route exact path="/modal/payment" component={PaymentPage} />
            <Route exact path="/modal/thanks" component={ThanksPage} />
          </div>
        </div>        
      </div>
    )
  }
}

export default App
