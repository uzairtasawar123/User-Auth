import React, { useEffect, useState } from "react";
import "./Signup.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "./Images/Signup.jpg";
import axios from 'axios';

const Signup = () => {
//////////////////////////////////////////////////////////////////////////////
    const[name , setName] = useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const [info , setInfo] = useState('')
//////////////////////////////////////////////////////////////////////////////
    const Navigate = useNavigate()
/////////////////////////////////////////////////////////////////////////////
    
     /////////////////////    HandleSignUp Function    /////////////////////////////
     const HandleSignUp = async ()=>{
           const res = await axios.post('http://localhost:5000/user/signup',{
            name:name,
            email:email,
            password:password
          })
          localStorage.setItem('signup' , JSON.stringify(res.data))
          if(res.data){
            Navigate('/')
          }
          else{
            alert("Someting went wrong")
          }
          // setInfo(res.data);
          // console.log(res.data);
          // Navigate('/')
     }
     console.log(info)

  //////////////////////////////////////////
  return (
    <>
      <Row>
        <Col md={6}>
         <h1 className='signup_heading'>Create You Account </h1>
          <div className="signup_div">
            <Form onSubmit={HandleSignUp}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Full Name <i className="fa-solid fa-user"></i>
                </Form.Label>
                <Form.Control type= "text" placeholder="Enter your name" value={name}  onChange={(e)=> setName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email address <i className="fa-solid fa-envelope"></i>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email"  value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password <i className="fa-solid fa-key"></i>
                </Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
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
                marginTop: "400px",
                position: "absolute",
                marginRight: "70px",
              }}
            >
              Already have an account?{" "}
              <Link to="/" style={{ color: "red" }}>
                LogIn
              </Link>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <img src={signupImg} className="Login_img"></img>
        </Col>
      </Row>
    </>
  );
};

export default Signup;
