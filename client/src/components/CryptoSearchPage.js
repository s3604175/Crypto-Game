import React, { Component } from 'react';
import Header from './Header';
import CryptoSearch from './CryptoSearch';
import withAuth from './withAuth';

class CryptoSearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      crypto: 'Select Crypto',
      currency: 'Select Currency',
      isSubmitted: false,
    }

    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleCryptoChange = this.handleCryptoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCurrencyChange(event) {
    this.setState({
      currency: event.target.value,
      isSubmitted: false
    });
  }


  handleCryptoChange(event) {
    this.setState({
      crypto: event.target.value,
      isSubmitted: false
    });
  }

  handleSubmit(event) {
    //alert('Crypto: ' + this.state.crypto + 'Currency: ' + this.state.currency);
    this.setState({ isSubmitted: true });
    event.preventDefault();
  }

  render() {
    return (
      <div className="crypto-search">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="crypto-select">
            <select className="select-css" id="select-crypto" onChange={this.handleCryptoChange}>
              <option value disabled selected>Select Crypto</option>
              <option value="BTC">Bitcoin</option>
              <option value="BCH">Bitcoin Cash</option>
              <option value="LTC">Litecoin</option>
              <option value="ETH">Ethereum</option>
            </select>
          </div>
          <div className="currency-select">
            <select className="select-css" id="select-currency" onChange={this.handleCurrencyChange}>
              <option value disabled selected>Select Currency</option>
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <button className="crypto-search__button">Search</button>
        </form>
        {this.state.isSubmitted && <CryptoSearch crypto={this.state.crypto} currency={this.state.currency} />}
      </div>
    );
  }
}

export default withAuth(CryptoSearchPage);