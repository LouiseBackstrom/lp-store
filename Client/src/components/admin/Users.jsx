import React from "react";
import Context from "../context/context";
import "./Users.css"
import { Box, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";

class Users extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;
  
  
  
    render() {
      return (
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box>
              <Link to="/admin">
                <h1>←</h1>
              </Link>
              <h1>Users</h1>
              <p>Uppgifter</p>
              <p>Approve admin VG</p>
              <p>Register admin??? VG</p>

            </Box>
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default Users;
  