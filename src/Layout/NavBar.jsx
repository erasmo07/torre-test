import React, { useState } from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import api from '../services/api';
import apiUlrs from '../services/apiUrls';

const NavBar = ({setSearch}) => {

  let history = useHistory();
  const [formValue, setFormValue] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    
    if (formValue.trim() === ''){
      return;
    }

    const response = await api.post(
      apiUlrs.search,
      {name: {term: formValue}}
    )

    console.log(response.data.results)
    if (response.data.results.lenght !== 0){
      setSearch(response.data.results)
    }

    history.push('/');
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse className="justify-content-md-center">
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-12"
              onChange={e => setFormValue(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
