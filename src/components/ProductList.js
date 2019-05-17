import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);
    return (
      <>
        <div calssname="py5">
          <div className="container">
            <Title name="наш    " title="каталог" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return <h1>{value}</h1>;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
      // <Product />
    );
  }
}

export default ProductList;
