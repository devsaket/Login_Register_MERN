import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import './style.scss'
import Home from '../Home'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const SignUp = () => {
  let navigate = useNavigate();
  const initialValues = { email: "", password: "", password2:"" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);

    const fvalues = {email: formValues.email, password: formValues.password}
    console.log(fvalues)

    Axios.post("http://localhost:5000/api/users", fvalues).then(() => {
        alert('User Registered Successfully!');
        navigate('/login')
    }).catch(() => {
        alert('Something Went Wrong!');
    })

  };


  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

    const passwordRegex = /^[A-Za-z0-9_]\w{8,20}$/


    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Password cannot be blank";
    } else if (!((values.password).length >= 8 && (values.password).length <= 20)) {
      errors.password = "Password must be of 8 - 20 characters";
    } else if (!passwordRegex.test(values.password)) {
      errors.email = "Invalid Password format";
    }

    if (!values.password2) {
      errors.password2 = "Password cannot be blank";
    } else if (!((values.password2).length >= 8 && (values.password2).length <= 20)) {
      errors.password2 = "Password must be of 8 - 20 characters";
    } else if (!(passwordRegex.test(values.contact) && values.password === values.password2)) {
      errors.email = "Invalid Password format";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);




  return (
    <>
      <Home />

      <Container fluid>
        <Row xs='12' sm='12' md='6' lg='4' xl='4' className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
          <Col bg='primary'>
            <h1 className='fs-1'>Sign Up</h1>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3" controlId="signupForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"} />
                {formErrors.email && (<span className="error text-danger">{formErrors.email}</span>)}
              </Form.Group>
              <Form.Group className="mb-3" controlId="signupForm.ControlInput2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="********" value={formValues.password} onChange={handleChange} className={formErrors.password && "input-error"} />
                {formErrors.password && (<span className="error text-danger">{formErrors.password}<br /></span>)}
                <Form.Text muted>
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="signupForm.ControlInput3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="password2" placeholder="********" value={formValues.password2} onChange={handleChange} className={formErrors.password2 && "input-error"} />
                {formErrors.password2 && (<span className="error text-danger">{formErrors.password2}<br /></span>)}
              </Form.Group>
              <Button type="submit">Sign Up</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignUp