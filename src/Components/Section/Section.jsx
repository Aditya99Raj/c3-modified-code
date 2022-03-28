import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
// import styled from "styled-components";

export const Section = () => {
  const {section}= useParams();

  // console.log(section)
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const [book,setBook]=useState([]);
 function handleSort(term){
  // let x=book.sort((a,b)=> a.price-b.price)
 
  //  setBook(x)
 }
  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((res)=>{
      console.log(res.data)
      let  x = res.data.filter((e)=> e.section===section)
      setBook(x)
     
    })
  },[section])

  // const Main = styled.div`
  //   /* Same as Homepage */
  // `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={handleSort} />

      {/* <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
      {/* </Main> */} 
      <div className="sectionContainer">
          {/* {book.map((e)=>{
            return <div className="col-4" key={e.id} > <Link to={`/bookdetailspage/${e.id}`} className="text-decoration-none"> 
            <img src={`${e.imageUrl}`} alt=""  />
            <p>{e.title}</p>
            <p>{e.price}</p>
            </Link> </div> 
           
          })} */}
         
        
        </div>
   
    </>
  );
};