import React , {useState} from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginimg from "./Images/loginImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  ////////////////////////////////////////////////
  const[email , setEmail] = useState('');
  const[password , setPassword] = useState('');
  const Navigate = useNavigate()
  ///////////////////////////////////////////////

  const HandleLogin = async (e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/user/login' ,{
      email: email,
      password: password
    })
    localStorage.setItem('login' , JSON.stringify(res.data))
    console.log(res.data)
    if(res.data.token){
      Navigate('/operation')
    }
    else{
      alert("Incorrect Email or Password")
    }
  }

  //////////////////////////////////////////////
  return (
    <>
      <Row>
        <Col md={6}>
          <h1 className="Login_heading">Login To Your Account</h1>
          <div className="signin_div">
            <Form onSubmit={HandleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email address <i className="fa-solid fa-envelope"></i>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password <i className="fa-solid fa-key"></i>
                </Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <button className="btn btn-outline-dark submitbtn" type="submit">
                Submit
              </button>
            </Form>
            <p
              style={{
                marginTop: "320px",
                position: "absolute",
                marginRight: "100px",
              }}
            >
              Create an account{" "}
              <Link to="/signup" style={{ color: "red" }}>
                Sigin Up
              </Link>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <img src={loginimg} className="Login_img"></img>
        </Col>
      </Row>
    </>
  );
};

export default Login;
