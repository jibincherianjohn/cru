import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';

import { Col, Container, Row } from 'react-bootstrap';
import { Edit, Eye, Trash2 } from 'react-feather';

import { Link } from 'react-router-dom';
import './ReadPage.css'
import Search from '../Components/Search';
import ViewModal from '../Components/ViewModal';
import { deleteUser, showUser } from '../rdux-toolkit/UserdetailSlice';



function View() {
  const dispatch=useDispatch()

const [id,setId]=useState()

const [showModal,setShowModal]=useState(false)

const {users, loading,searchData}=useSelector((state)=>state.user)

const [radioData, setRadioData] = useState("");

    useEffect(()=>{
      dispatch(showUser())
    },[])
    if(loading){
        return <h2>Loading</h2>
    }
  return (
    <div style={{backgroundColor:'#74cfa4', border:'3px solid', margin:'20px', paddingBottom:'20px'}}>
      {showModal &&<ViewModal id={id} showModal={showModal} setShowModal={setShowModal} />}

      <h2 className='text-center text-black fw-bold mt-3'>Employees</h2>
      <div className='srch container w-100'><Search></Search></div>
     <div className='container w-100 text-center'> <input
        class="form-check-input"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label className='text-black' class="form-check-label">All</label>
      <input
        class="form-check-input"
        name="gender"
        checked={radioData === "Male"}
        value="Male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className='text-black' class="form-check-label">Male</label>
      <input
        class="form-check-input"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className='text-black' class="form-check-label">Female</label>
      </div>
      
       <Container>
          <Row className='w-100 mt-5 mb-2  text-center'>
            
            {
             users&&
             users
             .filter((i)=>{
              if(searchData.length==0){
                return i
              }
              else{
                return i.name
                .toLowerCase()
                .includes(searchData.toLowerCase())
              }
 
             }) .filter((i) => {
              if (radioData === "Male") {
                return i.gender === radioData;
              } else if (radioData === "Female") {
                return i.gender === radioData;
              } else return i;
            })
             .map((i)=>(
              <Col key={i.id} className='mt-4' lg={4} md={12}>
        <Card style={{backgroundColor:'',color:'black'}} className='crd '>
      <Card.Body>
        <Card.Title className='fw-bold fs-4'>{i.name}</Card.Title>
        <Card.Text className='text-black fs-5'>
         {i.email}
        </Card.Text>
        <Card.Text className='text-black'>
         Age : {i.age}
        </Card.Text>
        <Card.Text className='text-black'>
         {i.gender}
        </Card.Text>
        <Eye onClick={()=>[setId(i.id), setShowModal(true)]} className='btn' size={50}></Eye>
       <Link style={{textDecoration:'none', color:'black'}}  to={`/edit/${i.id}`}> <Edit size={50} className='btn'></Edit></Link>
        <Trash2 onClick={()=> dispatch(deleteUser(i.id))} size={50} className='btn'></Trash2>
      </Card.Body>
    </Card>
    </Col>
        ))
}

</Row>
</Container>
    </div>
  )
}

export default View