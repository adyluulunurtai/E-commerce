import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-warning navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            korzina
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background-color: transparent;
  border: 0.05rem solid var(--mainYellow);
  color: var(--mainDark);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainYellow);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;

export default Navbar;
