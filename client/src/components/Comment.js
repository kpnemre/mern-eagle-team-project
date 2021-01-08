import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";


const Comment = (props) => {

//   console.log("props", props);
// console.log("id", props.id)

  return (
    <div className="singleComment">
      <img
        alt="user_image"
        className="userImage"
        src={`https://picsum.photos/70?random=${props.id}`}
      />
      <div className="textContent">
        <div className="singleCommentContent">
          <h3>{props.author}</h3>
         {/* <p>{props.id}</p> */}
        {/* <p>{props.timestamp}</p>  */}
          <p>{props.text}</p>
          <ReactMarkdown source={props.children} />
        </div>
      </div>

      <div className="textContent">
 

      
      </div>
    </div>
  );
};
Comment.propTypes = {
  // author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default Comment;
