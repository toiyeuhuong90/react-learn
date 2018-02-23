import React, { Component } from "react";
import "./Home.css";
import Banner from "./Banner";
import Product from "./Components/Hostest";
import { images } from "./../../components/assets/index";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Iphone X",
          price: "25.000.000 VND",
          image: images.default.product1,
          status: true
        },
        {
          id: 2,
          name: "Iphone XX",
          price: "24.000.000 VND",
          image: images.default.product1,
          status: true
        },
        {
          id: 3,
          name: "Iphone XXX",
          price: "23.000.000 VND",
          image: images.default.product1,
          status: true
        },
        {
          id: 4,
          name: "Iphone IV",
          price: "26.000.000 VND",
          image: images.default.product1,
          status: true
        }
      ],
      isActive: true
    };
  }
  showInfoProduct(product) {
    if (product.status) {
      return (
        <div>
          ID : {product.id}
          <br />
          Name: {product.name}
          <br />
          Status: {product.status ? "Active" : ""}
        </div>
      );
    }
  }
  onActiveState = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  render() {
    const users = [
      {
        id: 1,
        name: "Nguyen Van A",
        age: 21
      },
      {
        id: 3,
        name: "Nguyen Van B",
        age: 22
      },
      {
        id: 5,
        name: "Nguyen Van C",
        age: 23
      }
    ];

    const elements = users.map((user, index) => {
      return (
        <div key={index}>
          <h1>Id: {user.id}</h1>
          <h3>Name: {user.name}</h3>
          <h3>Age: {user.age}</h3>
        </div>
      );
    });

    let items = this.state.products.map((product, index) => {
      let check = ""; let onDisplay = '';
      if(this.state.isActive){
        if (product.status) {
            return (check = (
              <Product key={index} price={product.price} image={product.image}>
                {product.name}
              </Product>
            ));
          }
      }
      return check;
    });
    return (
      <div className="cms-home">
        <div className="container">
          <Banner />
          <div className="wrapper">
            <h2>Home page</h2>
            {/* this.showInfoProduct(product) */}
            {/*elements*/}

            <button
              type="button"
              className="btn btn-warning"
              onClick={this.onActiveState}
            >
            {this.state.isActive === true ? "Deactivate" : "Active"}
            </button>
            <div className="row">{items}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
