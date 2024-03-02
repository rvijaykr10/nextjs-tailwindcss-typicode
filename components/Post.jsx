import React from "react";

const Post = ({ post }) => {
  return (
    <div className="px-2">
      <div className="flex justify-center items-center h-10">Post!</div>
      <div className="mb-2" key={post?.id}>
        <h2>
          <span className="text-base font-normal italic">- {post?.title}</span>
        </h2>
        <p>
          <span className="text-sm font-light italic pl-2">{post?.body}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
