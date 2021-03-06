import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import AuthHelpers from './AuthHelpers';
import Logout from './Logout';

class Header extends Component {
    Auth = new AuthHelpers();
    _handleLogout = () => {
        this.Auth.logout()
        // this.props.history.replace('/login');
    }
    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/">
                            <h1>Crypto Game</h1>
                        </Link>
                        <div className="header__nav">
                            <NavLink to="/" activeClassName="is-active">Home</NavLink>
                            {this.Auth.loggedIn() && <NavLink to="/cryptosearch" activeClassName="is-active">Crypto Search</NavLink>}
                            {this.Auth.loggedIn() && <NavLink to="/graph" activeClassName="is-active">Graph</NavLink>}
                            {this.Auth.loggedIn() && <NavLink to="/buysell" activeClassName="is-active">Buy/Sell</NavLink>}
                            {this.Auth.loggedIn() && <NavLink to="/profile" activeClassName="is-active">Profile</NavLink>}
                            <NavLink to="/about" activeClassName="is-active">About</NavLink>
                            {this.Auth.loggedIn() && <Logout />}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;