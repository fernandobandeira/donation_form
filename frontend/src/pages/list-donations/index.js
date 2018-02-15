import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import { getDonors } from '../../actions'
import './style.css'

class ListDonationsPage extends Component {
  componentDidMount() {
    this.props.getDonors()
  }

  render() {
    const { donors } = this.props

    return (
      <div className='container list-donation'>
        <Link to={'/modal'}>
          <button 
            type="button" 
            className="btn btn-primary" 
            data-toggle="modal" 
            data-target="#donationWidget">New Donation</button>
        </Link>
        <table className="table">
          <thead>
            <tr>              
              <th scope="col">Amount</th>
              <th scope="col">Frequency</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor._id}>                
                <td>{donor.amount}</td>
                <td>{donor.frequency}</td>
                <td>{donor.anonymous ? 'Anonymous' : `${donor.first_name} ${donor.last_name}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({donors}, ownProps) => ({
  donors: donors.allIds.map(id => donors.byId[id]),
})

const mapDispatchToProps = dispatch => ({
  getDonors: () => dispatch(getDonors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListDonationsPage)
