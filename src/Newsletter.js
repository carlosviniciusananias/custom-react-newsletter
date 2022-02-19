import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { Container, Title, Form, Label, Input, Button, Sucess } from "./style";

const Newsletter = ({ BASE_URL, title, sucess, error }) => {
  const [state, setState] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;

    setInputs({
      ...inputs,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post(`${BASE_URL}`, {
        name: inputs.name,
        email: inputs.email,
      })
      .then(function () {
        setState(true);
      })
      .catch(function () {
        setState(false);
      });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Form>
        <div>
          <Label htmlFor="name">name</Label>
          <Input
            type="text"
            name="name"
            placeholder="insert your name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="email">email</Label>
          <Input
            type="email"
            name="email"
            placeholder="insert your e-mail"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" onClick={handleSubmit}>
          send
        </Button>
      </Form>

      {state && <Sucess>{sucess}</Sucess>}
    </Container>
  );
};

Newsletter.propTypes = {
  BASE_URL: PropTypes.string,
  title: PropTypes.string,
  sucess: PropTypes.string,
  error: PropTypes.string,
};

export default Newsletter;
