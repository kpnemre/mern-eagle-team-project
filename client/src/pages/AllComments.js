//CommentBox is main file and we export to index.js
import React, { useEffect, useState} from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
// import DATA from "../data";
import {fetchData} from "../helper/FetchData";
import {postData} from "../helper/PostData";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";




const AllComments =(props)=> {
const [allcomments, setAllcomments] = useState([])
// const [author, setAuthor] = useState("");
// const [text, setText] = useState("");
// const [data, setData] = useState([]);

const [postForm, setPostForm] = useState({
  author: "",
  text: "",
  data: "",

});



    useEffect(() => {
    fetchData("/api/comments")
    .then((data)=>{
      // console.log('Allcomment', allcomments)
      setAllcomments(data?.allComments)
    })
    .catch((error)=>console.log(error))
    }, [])

  //  const onChangeAuthor = (e) => {

  //   const {author}= {...formtext}
  //   let value = e.target.value;
  //   formtext.author += value;
  //   setFormtext(formtext);
  //   console.log("formtext", formtext)
  // }
   const onChangeAuthor = (e) => {
    setPostForm({ ...postForm, author: e.target.value })
   }
  const onChangeText = (e) => {
    setPostForm({ ...postForm, text: e.target.value })
  }

    const submitComment=(e)=>{
      e.preventDefault();
      // const formdata= JSON.stringify(postForm)
      // console.log(postData)
      // console.log(formdata)
postData("/api/comments/postcomment",postForm)
    .then((data,error)=>{
      toast("Successfully registered");
  console.log('postdata ',data);
  
    
    })
    .catch((error)=>console.log(error)).then(fetchData("/api/comments")
    .then((data)=>{
      // console.log('Allcomment', allcomments)
      setAllcomments(data?.allComments)
    }))


    }

//   const submitComment=(e)=>{
//     e.preventDefault();
//     // console.log("e",  e)

//     // console.log("text, author" , text, author)
    
// const data = {text,author }
// setData(data);
// console.log("data",data)
// const formdata= JSON.stringify(data)
// postData("/api/comments/postcomment", formdata)
//     .then((data,error)=>{
//       toast("Successfully registered");
//   console.log(data)
    
//     })
//     .catch((error)=>console.log(error))

//   }

// console.log("postForm",postForm.author)

  return (
    <div>
      <Navbar />
    <div className="container">
    <div className="comments">
        <h3> All User Comments:</h3>
        <CommentList data={allcomments} />
        <div className="form">
        <CommentForm 
          handleChangeText={onChangeAuthor}
          author={postForm.author}
          handleTextChange={onChangeText}
          text={postForm.text}
          submitComment={submitComment}
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
