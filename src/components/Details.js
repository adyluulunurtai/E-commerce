import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-5 ">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-5 text-slanted ">
                  <h2>модель : {title}</h2>
                  <h4 className=" mt-3 mb-2 text-capitalize">
                    компания : {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong>Цена : {price} сом</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    описание :{" "}
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>назад в каталог</ButtonContainer>
                    </Link>
                    <ButtonContainer>
                      {inCart ? "incart" : "добавить в корзину"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
