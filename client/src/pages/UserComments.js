//CommentBox is main file and we export to index.js
import React, { useEffect} from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import DATA from "../data";
import {fetchData} from "../helper/FetchData";
import Navbar from "../components/Navbar";


// TODO:
// 1. Sign olunca Usrcomment e gidecek. Navbar olsun. button(Show All comment)
// 2. Navbar login olduğunu belirtir Profile Avatar.
// 3. Navbar a Log out  button u ekle.

const UserComments =()=> {

useEffect(() => {
fetchData("http://localhost:5000/api/comments")
.then((data)=>{
  console.log(data.json())
})
.catch((error)=>console.log(error))
}, [])
  return (
    <div>
      <Navbar />

    <div className="container">
    <div className="comments">
        <h3> User Comments:</h3>
        <CommentList data={DATA} />
        <div className="form">
        <CommentForm />
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

export default UserComments;

// Extras :
// TODO: add to project default facebook main page .
// Only clickabe button shoulde be comment button to go our comment page
// To make a facebook main page use UI-UX tool like Material design , ...
