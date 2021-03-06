import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Layout from "./Layout";
import { Provider } from "./components/context/context";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/context/userContext";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider value={this.state}>
          <Provider value={this.state}>
            <div className="App">
              <Grommet theme={grommet}>
                <Layout />
              </Grommet>
            </div>
          </Provider>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
