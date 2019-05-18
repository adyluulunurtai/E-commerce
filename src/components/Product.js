import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Product extends Component {
  render() {
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
        <h3>HEllo from Product</h3>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;

export default Product;
