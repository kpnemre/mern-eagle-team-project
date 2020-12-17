//CommentBox is main file and we export to index.js
import React from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

function UserComments() {
  return (
    <div className="App">
      <div>
        <h1> User Comments:</h1>
        <CommentList />
        <CommentForm />
        {/* 
TODO: ADD COMMENTS from comment list

TODO: ADD SEND COMMENTS FORM-- Comment Form
*/}
      </div>
    </div>
  );
}

export default UserComments;

// Extras :
// TODO: add to project default facebook main page .
// Only clickabe button shoulde be comment button to go our comment page
// To make a facebook main page use UI-UX tool like Material design , ...
