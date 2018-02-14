import React, {Component} from 'react'
import { Route } from 'react-router-dom';

import AmountPage from './pages/amount'

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
        </div>
      </div>
    )
  }
}

export default App
