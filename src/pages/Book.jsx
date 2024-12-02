import React, { useEffect, useState } from "react";
import axios from "axios";
import serverurl from "../services/serverurl";
import { Link } from "react-router-dom";
import "../App.css";

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const result = await axios.get(`${serverurl}/books`);
        setBooks(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllData();
  }, []);
  console.log(books);

  const handleDelete = async (id)=>{
    try{
      await axios.delete(`${serverurl}/books/${id}`)
      window.location.reload()
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
      <h2>Book collection</h2>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <div className="button">
              <button className="button-style" onClick={()=>handleDelete(book.id)}>Delete</button>
              <button className="button-style"><Link to={`/update/${book.id}`}>Update</Link></button>
            </div>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </>
  );
};

export default Book;
