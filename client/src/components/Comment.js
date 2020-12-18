import React from "react";
import PropTypes from 'prop-types';
// import CommentList from "./CommentList";
// import CommentForm from "./CommentForm";
import ReactMarkdown from "react-markdown";

const Comment = ({author,id,children}) => {
  return (
    <div className="singleComment">
    <img alt="user_image" className="userImage" src={`https://picsum.photos/70?random=${id}`} />
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{author}</h3>
        <ReactMarkdown source={children} />
      </div>
      <div className="singleCommentButtons">
      </div>
    </div>
  </div>
  )
};
Comment.propTypes = {
    author: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };
export default Comment;
