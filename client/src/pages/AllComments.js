
import React, { useEffect, useState } from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
// import DATA from "../data";
import { fetchData } from "../helper/FetchData";
import { postData } from "../helper/PostData";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import SimpleModal from "../components/Modal";

const AllComments = (props) => {
  const [allcomments, setAllcomments] = useState([]);
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
      .then((data) => {
        // console.log('Allcomment', allcomments)
        setAllcomments(data?.allComments);
      })
      .catch((error) => console.log(error));
  }, [postForm]);

  const onChangeAuthor = (e) => {
    setPostForm({ ...postForm, author: e.target.value });
  };
  const onChangeText = (e) => {
    setPostForm({ ...postForm, text: e.target.value });
  };
  const clear = () => {
    setPostForm({ author: "", text: "", data: "" });
  };
  const submitComment = (e) => {
    e.preventDefault();
    postData("/api/comments/postcomment", postForm)
      .then((data, error) => {
        toast("Successfully registered");
        console.log("postdata ", data);
        clear();
      })
      .catch((error) => console.log(error));
  };
  console.log("data",allcomments)
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="comments">

          {allcomments.length < 1 ? 
          <SimpleModal />:
          <div>
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
            </div>
          </div>

} 
        </div>
      </div>
    </div>
  );
};

export default AllComments;

// Extras :
// TODO: add to project default facebook main page .
// Only clickabe button shoulde be comment button to go our comment page
// To make a facebook main page use UI-UX tool like Material design , ...
