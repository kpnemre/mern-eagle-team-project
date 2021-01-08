
import React from 'react'
import PropTypes from 'prop-types';

const CommentForm = (props) => {
    // console.log("props",props)

    return (
<form onSubmit = {props.submitComment}>

    <input 
    type="text"
    name="author"
    placeholder="Enter your name"
    value={props.author}
    onChange ={props.handleChangeText}
    />

   
    <input 
        type="text"
        name="text"
        placeholder="Type something..."
        value={props.text}
        onChange ={props.handleTextChange}
    />
    <button type="submit">Submit</button>
    
</form>
    )
}

CommentForm.propTypes = {
    // submitComment: PropTypes.func.isRequired,
    // handleChangeText: PropTypes.func.isRequired,
    text: PropTypes.string,
    author: PropTypes.string,
  };
  CommentForm.defaultProps = {
    text: '',
    author: '',
  };
export default CommentForm;
