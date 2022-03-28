import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const [books,setBooks] = useState({});
  let {id}=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
     
      setBooks(res.data)
    })
  },[])
  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{books.title}</h2>
        <img className="image" src={`${books.imageUrl}`} alt="#" />
        <div className="author">{books.author}</div>
        <div className="description">{books.description}</div>
        <div className="price">{books.price}</div>
        <div className="section">{books.section}</div>
        <div className="isbnNumber">{books.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
          {( books.reviews)? 
            books.reviews.map((e)=>{
              return <li> {e}</li>
            }) : "not available"
          }
        </ul>
      </div>
    </>
  );
};