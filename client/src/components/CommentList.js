
import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = (props) => {
    // console.log("props", props)


    // commentText: "test"
    // commentUserEmail: "yusuf@gmail.com"
    // registerDate: "2020-12-18T20:52:17.078Z"
    // __v: 0
    // _id: "5fdd168185f37ad3a8f06c35"

    const commentNodes = props.data.map(comment=>(
        <Comment
        // author = {comment.commentUserEmail}
        author = {comment.author}
        key = {comment._id}
        id = {comment._id}
        timestamp = {comment.registerDate}
        // handleUpdateComment = {props.handleUpdateComment}
        // handleDeleteComment = {props.handleDeleteComment}  
        >
            
            {comment.text}
        </Comment>
    ));

    return (
        <div>
            {commentNodes}
        </div>
    );
};

CommentList.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        author : PropTypes.string,
        id : PropTypes.string,
        text : PropTypes.string,
        updatedAt : PropTypes.string,
    })),

    // handleDeleteComment: PropTypes.func.isRequired,
    // handleUpdateComment: PropTypes.func.isRequired,
};

CommentList.defaultProps = {
    data : []
};

export default CommentList;
