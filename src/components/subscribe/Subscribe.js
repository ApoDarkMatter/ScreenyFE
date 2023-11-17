import React, { useState } from 'react'
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Subscribe() {

  const navigate = useNavigate()

  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    shopName: shopName,
    email: email,
    password: password,
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(isValidEmail(email)) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_BASE_URL}/users`,
          formData
        );
        console.log("User created successfully:", response.data);
        alert("User created successfully")
        window.location.href="/"
      } catch (error) {
        console.log("Si è verificato un errore:", error);
      }
    } else {
      alert("Not valid email")
    }
  
  }

  return (
    <>  
        <Container className="new-user-container">
          <Form
            className="mt-5"
            >
            <Form.Group className="mt-3">
              <Form.Label>Shop Name</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Shop Name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="d-flex mt-3 justify-content-end">
              <Button type="reset" size="lg" variant="outline-dark">
                Reset
              </Button>
              <Button
                onClick={handleSubmit}
                type="submit"
                size="lg"
                variant="dark"
                style={{
                  marginLeft: "1em",
                }}
              >
                Add User
              </Button>
            </Form.Group>
          </Form>
        </Container>
    </>
  )
}

export default Subscribe