import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  fetchUsers } from '../rdux-toolkit/UserdetailSlice';
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [users,setUsers]=useState({})
  const getUsers=(e)=>{
      setUsers({...users, [e.target.name]: e.target.value})
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("Users...",users);
      dispatch(fetchUsers(users))
      navigate("/read")
  }


  return (

   
   <div className='shadow-lg '>
      <h2 className='mt-4 fw-bold text-black text-center'>Add Employee </h2>
        <div style={{backgroundColor:'#575f99'}} className='container w-75 shadow border border-rounded mb-3 fw-bold text-black mt-3 p-5 '>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={getUsers} type="text" name='name' placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={getUsers} type="email" name='email' placeholder="Enter Email" />
        <Form.Text className="text-muted ">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={getUsers} type="number" name='age' placeholder="Enter Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRadio">
        <Form.Check value='Male' onChange={getUsers} name='gender' type="radio" label="Male" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRadio">
        <Form.Check value='Female' onChange={getUsers} name='gender' type="radio" label="Female" />
      </Form.Group>
      <div className='container w-100 text-center'>
      <Button   variant="dark" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    
    </div>
    </div>
   
    
  )
}

export default Home