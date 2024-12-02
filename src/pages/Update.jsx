import React, { useState } from 'react'
import axios from 'axios'
import serverurl from "../services/serverurl";
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'

const Update = () => {
  const [book,setBook] = useState({
    title:"",
    description:"",
    cover:""
  })
  
  const navigate = useNavigate()
  const location = useLocation()

  const bookid = location.pathname.split('/')[2]

  const handleChange = (e) =>{
    setBook(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick = async (e)=>{
    e.preventDefault()
    try{
      await axios.put(`${serverurl}/books/${bookid}`,book)
      console.log(book);
      navigate("/")
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <div className='form'>
      <h2>Update new book</h2>
      <input type='text' placeholder='title' name='title' onChange={handleChange}/>
      <input type='text' placeholder='description' name='description'  onChange={handleChange}/>
      <input type='text' placeholder='cover' name='cover'  onChange={handleChange}/>
      <div className="button">
        <button className='form-button' onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

export default Update
