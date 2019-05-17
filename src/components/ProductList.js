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
    return (
      <>
        <div calssname="py5">
          <div className="container">
            <Title name="наш    " title="каталог" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
