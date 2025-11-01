/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Debits extends Component {
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

  //handle changes of amount input
  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  }

  //handle form submission to add new debit
  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.description && this.state.amount > 0) {
      this.props.addDebit(this.state.description, this.state.amount);
      
      this.setState({
        description: '',
        amount: 0
      });
    }
  }

  // Create list of Debit items
  debitsView = () => {
    const { debits } = this.props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>${debit.amount.toFixed(2)} - {debit.description} - {date}</li>
    });
  }

  render() {
    return (
      <div>
        <h1>Debits</h1>
        
        <AccountBalance accountBalance={this.props.accountBalance} />
        
        <br/>
        
        <div>
          <h2>Debits List</h2>
          <ul>
            {this.debitsView()}
          </ul>
        </div>

        <br/>
        
        <div>
          <h2>Add New Debit</h2>
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
            <button type="submit">Add Debit</button>
          </form>
        </div>

        <br/>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Debits;