import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { updateUser } from '../rdux-toolkit/UserdetailSlice';





function Update() {

  
  const { id } = useParams()

  const [updateProfile, setUpdateProfile] = useState()

  const { users, loading } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const singleProfile = users.filter((i) => i.id === id)
      setUpdateProfile(singleProfile[0])
    }
  }, [])

  console.log(updateProfile);
    
  const newData = (e) => {
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value })

  }

  const handleUpdate = (e) => {
    e.preventDefault()
   dispatch(updateUser(updateProfile))
    navigate('/read')
  }

  return (
    <div style={{ backgroundColor: '#f0f5f5', border: '3px solid', margin: '20px', paddingBottom: '20px' }}>
    <h2 className='mt-4 text-center text-black fw-bold'>Edit Employee Details</h2>
    <div style={{ backgroundColor: '#669999' }} className='container w-100 fw-bold  text-black mt-5 py-3'>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={newData}
            type="text" name='name' placeholder="Enter Name" value={updateProfile && updateProfile.name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={newData}
            type="email" name='email' placeholder="Enter Email" value={updateProfile && updateProfile.email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onChange={newData}
            type="number" name='age' placeholder="Enter Age" value={updateProfile && updateProfile.age} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRadio">
          <Form.Check value='Male'
            onChange={newData}
            name='gender' type="radio" label="Male" checked={updateProfile && updateProfile.gender == 'Male'} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRadio">
          <Form.Check value='Female'
            onChange={newData}
            name='gender' type="radio" label="Female" checked={updateProfile && updateProfile.gender == 'Female'} />
        </Form.Group>
        <div className='container w-100 text-center'>
          <Button variant="dark" type="submit">
            Submit
          </Button>
          <Link to={'/read'}><Button className='ms-3' variant='dark'>Back</Button></Link>
        </div>

      </Form>
    </div>


  </div>
  )
}

export default Update