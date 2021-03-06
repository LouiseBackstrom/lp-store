import React from "react";
import "./App.css";
import MainPage from "./components/mainPage/mainPage";
import Header from "./components/header/header";
import Flowers from "./components/header/Flowers";
import Admin from "./components/admin/admin";
import Orders from "./components/admin/Orders";
import Products from "./components/admin/Products";
import UploadProduct from "./components/admin/UploadProduct";
import Checkout from "./components/checkout/Checkout";
import ProductPage from "./components/productPage/ProductPage";
import { Switch, Route } from "react-router-dom";
import Context from "./components/context/context";
import { Box } from "grommet";

class Layout extends React.Component {
  static contextType = Context;
  render() {
    return (
      <>
        <div className="App">
          <div className="grainyWrapper"></div>
          <Box className="backgroundWrapper">
            <Flowers />
            <Header />

            <Switch>
              <Route path="/checkout/">
                <Checkout
                  selectedShipping={this.context.selectedShipping}
                  getTotalQuantity={this.context.getTotalQuantity}
                />
              </Route>
              <Route path="/productpage/:id" component={ProductPage}></Route>
              <Route path="/admin/orders">
                <Orders />
              </Route>
              <Route path="/admin/products">
                <Products />
              </Route>
              <Route path="/admin/uploadproduct">
                <UploadProduct />
              </Route>
              <Route path="/admin/">
                <Admin />
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </Box>
        </div>
      </>
    );
  }
}

export default Layout;
