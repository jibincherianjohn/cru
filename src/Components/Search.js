import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { searchUser } from '../rdux-toolkit/UserdetailSlice';



function Search() {

    const [searchData,setSearchData]=useState("")

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(searchUser(searchData))
  },[searchData])
  return (
   <div>

<Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search Employee"
              className="me-2 "
              aria-label="Search"
              onChange={(e)=>setSearchData(e.target.value)}
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
    </div>
  )
}

export default Search