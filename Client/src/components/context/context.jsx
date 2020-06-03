import React from "react";
import axios from "axios";
import { Box } from "grommet";
import { Link } from "react-router-dom";
import style from "./Context.css";

const Context = React.createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAlbums: [],
      rock: [],
      soul: [],
      pop: [],
      psycadelic: [],
      prog: [],
      other: [],
      getAllAlbums: this.getAllAlbums,
      getAllRock: this.getAllRock,
      getAllSoul: this.getAllSoul,
      getAllPop: this.getAllPop,
      getAllPsycadelic: this.getAllPsycadelic,
      getAllProg: this.getAllProg,
      getAllOther: this.getAllOther,
      displayAllAlbums: this.displayAllAlbums,
      displayAllRock: this.displayAllRock,
      displayAllSoul: this.displayAllSoul,
      displayAllPop: this.displayAllPop,
      displayAllPsycadelic: this.displayAllPsycadelic,
      displayAllProg: this.displayAllProg,
      displayAllOther: this.displayAllOther,
    };
  }

  getAllAlbums = () => {
    axios.get("http://localhost:5000/products").then((response) => {
      this.setState({ products: response.data });
    });
  };

  getAllRock = () => {
    axios.get("http://localhost:5000/products/Rock").then((response) => {
      //console.log("response", response.data)
      this.setState({ rock: response.data });
    });
  };

  getAllSoul = () => {
    axios.get("http://localhost:5000/products/Soul").then((response) => {
      this.setState({ soul: response.data });
    });
  };

  getAllPop = () => {
    axios.get("http://localhost:5000/products/Pop").then((response) => {
      this.setState({ pop: response.data });
    });
  };

  getAllPsycadelic = () => {
    axios.get("http://localhost:5000/products/Pop").then((response) => {
      this.setState({ psycadelic: response.data });
    });
  };

  getAllProg = () => {
    axios.get("http://localhost:5000/products/Pop").then((response) => {
      this.setState({ prog: response.data });
    });
  };

  getAllOther = () => {
    axios.get("http://localhost:5000/products/Pop").then((response) => {
      this.setState({ other: response.data });
    });
  };

  displayAllAlbums = () => {
    console.log("products", this.state.products)
    if (!this.state.products.length) return null;
    
    return this.state.products.map((product, index) => (
      <Link
      to={{
        pathname: "/productpage/" + product._id,
      }}
      >
        <Box
          key={index}
          height="20rem"
          width="20rem"
          margin="large"
          background="purple"
          >
          <img src={product.image} />
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
          <p>{product.stock_quantity}</p>
        </Box>
      </Link>
    ));
  };

  displayAllRock = () => {
    if (!this.state.rock.length) return null;

    return this.state.rock.map((product, index) => (
      <Box key={index} className="boxStyle">
        <Link
          to={{
            pathname: "/productpage/" + product._id,
          }}
        >
          <div
            style={{ backgroundImage: `url(${product.image})` }}
            className="imgStyle"
          ></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
          <p>{product.genre}</p>
        </Link>
      </Box>
    ));
  };

  displayAllSoul = () => {
    if (!this.state.soul.length) return null;

    return this.state.soul.map((product, index) => (
      <Box key={index} className="boxStyle">
        <Link
          to={{
            pathname: "/productpage/" + product._id,
          }}
        >
          <div
            style={{ backgroundImage: `url(${product.image})` }}
            className="imgStyle"
          ></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
        </Link>
      </Box>
    ));
  };

  displayAllPop = () => {
    if (!this.state.pop.length) return null;

    return this.state.pop.map((product, index) => (
      <Link
        to={{
          pathname: "/productpage/" + product._id,
        }}
      >
        <Box key={index} className="boxStyle">
          <div
            style={{ backgroundImage: `url(${product.image})` }}
            className="imgStyle"
          ></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
        </Box>
      </Link>
    ));
  };

  displayAllPsycadelic = () => {
    if (!this.state.psycadelic.length) return null;

    return this.state.psycadelic.map((product, index) => (
      <Link
        to={{
          pathname: "/productpage/" + product._id,
        }}
      >
        <Box key={index} className="boxStyle">
          <div
            style={{ backgroundImage: `url(${product.image})` }}
            className="imgStyle"
          ></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
        </Box>
      </Link>
    ));
  };

  displayAllProg = () => {
    if (!this.state.prog.length) return null;

    return this.state.prog.map((product, index) => (
      <Link
        to={{
          pathname: "/productpage/" + product._id,
        }}
      >
        <Box key={index} className="boxStyle">
          <div
            style={{ backgroundImage: `url(${product.image})` }}
            className="imgStyle"
          ></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
        </Box>
      </Link>
    ));
  };

  displayAllOther = () => {
    if (!this.state.other.length) return null;

    return this.state.other.map((product, index) => (
      <Link
        to={{
          pathname: "/productpage/" + product._id,
        }}
      >
        <Box key={index} className="boxStyle">
          <div
            style={{ backgroundImage: `url(${product.image})` }}
            className="imgStyle"
          ></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
        </Box>
      </Link>
    ));
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

export const Consumer = Context.Consumer;
