
import React from 'react'
import PropTypes from 'prop-types';

const CommentForm = (props) => {
    console.log(props)
    const handleChangeText =()=>{

    }
    return (
<from onSubmit = {props.submitComment}>

    <input 
    type="text"
    name="author"
    placeholder="Enter your name"
    value={props.author}
    onChange ={handleChangeText}
    />

   
    <input 
        type="text"
        name="author"
        placeholder="Type something..."
        value={props.text}
        onChange ={props.handleTextChange}
    />
    <button type="submit">Submit</button>
    
</from>
    )
}

CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    text: PropTypes.string,
    author: PropTypes.string,
  };
  CommentForm.defaultProps = {
    text: '',
    author: '',
  };
export default CommentForm;
