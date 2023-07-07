import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function PIForm() {
  return (
    <>
      <div className="form-container">
        <div>PIForm Page</div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>الجنس</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">ذكر</option>
              <option value="2">انثى</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>العمر</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>البلد</Form.Label>
            <Form.Control />
          </Form.Group>

          <Link to="/Questions">
            <Button variant="primary" type="submit">
              Submit
            </Button>{" "}
          </Link>
        </Form>
        <Link to="Home"> Home </Link>
      </div>
    </>
  );
}

export default PIForm;
