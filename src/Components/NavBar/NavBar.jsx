import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/page1?name=rootx" className="nav-link">
            Page1
          </Link>
          <Link to="/page2" className="nav-link">
            Page2
          </Link>
          <Link to="/page3" className="nav-link">
            Page3
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
