import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
        <div className="card">
          <div className="img-container p-5">
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {" "}
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          <div className="card-footer ">
            <p className="align-self-center mb-0">{title}</p>
            <h3 className="d-flex justify-content-right align-self-flex-end text-blue font-bold mb-0 float-right">
              {price}
              <span className="d-flex justify-content-flex-end">c.</span>
            </h3>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;

export default Product;
