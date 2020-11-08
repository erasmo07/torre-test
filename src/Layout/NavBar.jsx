import React from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse className="justify-content-md-center">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-12" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
