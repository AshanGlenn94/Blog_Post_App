import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ postID }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="list">
            {comment.body}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comments;
