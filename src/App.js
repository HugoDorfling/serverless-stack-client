import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from 'react-router-bootstrap';
import { AppContext } from './libs/contextLib';
import { Auth } from 'aws-amplify';
import { onError } from './libs/errorLib';

function App() {
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  },[]);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  }

    return (
      !isAuthenticating &&
      <div className="App container">
        <Navbar collapseOnSelect expand="md" animation="false">
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" animation="false">
            <Nav className="ml-auto">
              {isAuthenticated
                ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                : <>
                    <LinkContainer to="/signup">
                      <Nav.Link className="p-3">Sign Up</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <Nav.Link className="p-3">Login</Nav.Link>
                    </LinkContainer>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    );
}

export default App;
