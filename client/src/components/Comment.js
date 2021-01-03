import React from "react";
import PropTypes from 'prop-types';
// import CommentList from "./CommentList";
// import CommentForm from "./CommentForm";
import ReactMarkdown from "react-markdown";

const Comment = (props) => {
  // console.log("props",props)
  return (
    <div className="singleComment">
    <img alt="user_image" className="userImage" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{props.author}</h3>
        {/* <p>{props.id}</p>
        <p>{props.timestamp}</p> */}
        <p>{props.text}</p>
        <ReactMarkdown source={props.children} />
      </div>
      <div className="singleCommentButtons">
      </div>
    </div>
  </div>
  )
};
Comment.propTypes = {
    // author: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };
export default Comment;
