import React, {Component} from 'react'
import { Route } from 'react-router-dom';

import AmountPage from './pages/amount'
import DonorPage from './pages/donor'

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
          <Route exact path="/donor" component={DonorPage} />
        </div>
      </div>
    )
  }
}

export default App
