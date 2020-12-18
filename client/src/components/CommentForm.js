
import React from 'react'
import PropTypes from 'prop-types';

const CommentForm = ({author,text}) => {
    return (
<from >
{/* onSubmit = {submitComment} */}
    <input 
    type="text"
    name="author"
    placeholder="Enter your name"
    value={author}
    // onChange ={handleChangeText}
    />

   
    <input 
        type="text"
        name="author"
        placeholder="Type something..."
        value={text}
        // onChange ={handleTextChange}
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
