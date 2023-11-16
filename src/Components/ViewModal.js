import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

function ViewModal({id, showModal, setShowModal}) {
    const allUsers= useSelector((state)=>state.user.users)
    
    const singleProfile= allUsers.filter((i)=>i.id===id)

  return (
    <div>
    <div className='container w-25 '>
       
    
  <Modal  show={showModal} >
    <Modal.Body style={{backgroundColor:'#825e5e'}} className='text-center '>
      <h2 className='text-dark fw-bold'>{singleProfile[0].name}</h2>
      <hr />
      <h5 className='text-black'>Email : {singleProfile[0].email}</h5>
      <h5 className='text-black'>Age : {singleProfile[0].age}</h5>
      <h5 className='text-black'>Gender : {singleProfile[0].gender}</h5>
      
      <Button className='mt-3' variant="dark" onClick={()=>setShowModal(false)}>
        Close
      </Button>
    
    </Modal.Body>
   
  </Modal>
  
  </div>
</div>
  )
}

export default ViewModal