//CommentBox is main file and we export to index.js
import React, { useEffect, useState} from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
// import DATA from "../data";
import {fetchData} from "../helper/FetchData";
import Navbar from "../components/Navbar";



const AllComments =(props)=> {
const [allcomments, setAllcomments] = useState([])
const [text, setText] = useState("");
    useEffect(() => {
    fetchData("/api/comments")
    .then((data)=>{
      console.log(allcomments)
      setAllcomments(data?.allComments)
    })
    .catch((error)=>console.log(error))
    }, [])

   const onChangeText = (e) => {
    setText(e.target.value);
  }
  // const submitComment=()=>{

  // }
  return (
    <div>
      <Navbar />
    <div className="container">
    <div className="comments">
        <h3> All User Comments:</h3>
        <CommentList data={allcomments} />
        <div className="form">
        <CommentForm 
          handleChangeText={onChangeText}
          // submitComment={submitComment}
          />
        {/* 
TODO: ADD COMMENTS from comment list

TODO: ADD SEND COMMENTS FORM-- Comment Form
*/}
  </div>
      </div>
    </div>
    </div>
  );
}

export default AllComments;

// Extras :
// TODO: add to project default facebook main page .
// Only clickabe button shoulde be comment button to go our comment page
// To make a facebook main page use UI-UX tool like Material design , ...
