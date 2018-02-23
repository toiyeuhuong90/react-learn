import React, { Component } from "react";
import { images } from "./../../../components/assets/index";

class Product extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.onAddToCart = this.onAddToCart.bind(this);
  //   }

  //   onAddToCart() {
  //     alert("Add " + this.props.children + "to cart success!");
  //   }

//   onAddToCart = () => {
//     alert("Add " + this.props.children + "to cart success!");
//   };

  render() {
    return (
      <div className="col-lg-3 col-sm-4 col-6">
        <div
          className="thumbnail product-img"
          style={{
            textAlign: "center",
            borderWidth: 1,
            borderColor: "#dcdcdc",
            borderStyle: "solid"
          }}
        >
          <img src={images.default.product1} alt="Iphone X" />
          <div className="caption">
            <h3>{this.props.children}</h3>
            <p>Price: {this.props.price}</p>
            <p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => {alert("Add '" + this.props.children + "' to cart success!")}}
              >
                Add to Cart
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
