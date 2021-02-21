import React, { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./Comments";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickComments = () => {
    setShowComments(!showComments);
  };

  const listStyle = {
    color: "black",
    textDecoration: "none",
    listStyle: "none",
  };
  return (
    <>
      <ul>
        {posts.map((post) => (
          <>
            <li style={listStyle} key={post.id}>
              {post.title}
            </li>
            <button
              name="comments"
              value="comments"
              onClick={handleClickComments}
            >
              Show Comments
            </button>
            {showComments ? <Comments postID={post.id} /> : null}
          </>
        ))}
      </ul>

      {/* <Comments postID={post.id} /> */}
    </>
  );
};

export default Posts;
