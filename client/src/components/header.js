import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Header extends Component {
  renderSignButton() {
    if (this.props.authenticated) {
      return (
        <div class="navbar-end">
            <div class="navbar-item">
          <a class="button is-light is-size-5" href="/#signout">
            Sign out
          </a>
        </div>
        </div>
      );
    } else {
      return [
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary is-size-5" href="/#signup">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light is-size-5" href="/#signin">
                Sign in
              </a>
            </div>
          </div>
        </div>,
      ];
    }
  }
  render() {
    return (
      <nav class="navbar is-warning is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand" >
          <a href="/">
            <img src="../img/logo.png" alt="Page turners" width="80"/>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-size-5" href="/#my-books">
              My Books
            </a>
            <a class="navbar-item is-size-5" href="/#my-matches">
              My Matches
            </a>
            <a class="navbar-item is-size-5" href="/#account">
              Account
            </a>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">{this.renderSignButton()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    authenticated: auth.authenticated,
  };
}

export default connect(mapStateToProps, actions)(Header);
