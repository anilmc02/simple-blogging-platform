import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostManagement() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  function deletePost(postId) {
    fetch(`http://localhost:4000/post/${postId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          setPosts(posts.filter((post) => post._id !== postId));
        } else {
          throw new Error("Failed to delete post");
        }
      })
      .catch((error) => console.error("Error deleting post:", error));
  }

  return (
    <div>
      <h1>Post Management</h1>
      <Link to="/create" className="btn-create-post">
        Create New Post
      </Link>
      <div>
        {posts.map((post) => (
          <div key={post._id} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <Link to={`/post/${post._id}`} className="btn-view-post">
              View Post
            </Link>
            <button
              onClick={() => deletePost(post._id)}
              className="btn-delete-post"
            >
              Delete Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
