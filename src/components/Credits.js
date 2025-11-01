/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Credits extends Component {
  constructor() {
    super();
        this.state = {
      description: '',
      amount: 0
    };
  }

  //handle changes of description input
  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  //handle changes amount input
  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  }

  //handle submission to add new credit
  handleSubmit = (event) => {
    event.preventDefault(); 
    
    if (this.state.description && this.state.amount > 0) {
      this.props.addCredit(this.state.description, this.state.amount);
      
      // Reset after submission
      this.setState({
        description: '',
        amount: 0
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Credits</h1>
        
        {/* Display Account Balance */}
        <AccountBalance accountBalance={this.props.accountBalance} />
        
        <br/>
        
        {/* Credits List Section */}
        <div>
          <h2>Credits List</h2>
          <ul>
            {this.props.credits.map((credit) => (
              <li key={credit.id}>
                <strong>{credit.description}</strong>: 
                ${credit.amount.toFixed(2)} - 
                Date: {credit.date.split('T')[0]}
              </li>
            ))}
          </ul>
        </div>

        <br/>
        
        {/* Add Credit Form Section */}
        <div>
          <h2>Add New Credit</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="description">Description: </label>
              <input 
                type="text" 
                id="description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                placeholder="Enter description"
                required
              />
            </div>
            <div>
              <label htmlFor="amount">Amount: </label>
              <input 
                type="number" 
                id="amount"
                step="0.01"
                min="0.01"
                value={this.state.amount}
                onChange={this.handleAmountChange}
                placeholder="0.00"
                required
              />
            </div>
            <button type="submit">Add Credit</button>
          </form>
        </div>

        <br/>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Credits;