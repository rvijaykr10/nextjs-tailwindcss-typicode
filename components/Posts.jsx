import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="px-2">
      <h2 className="text-center text-xl underline underline-offset-2 font-semibold pb-4">
        POSTS
      </h2>
      {posts?.map((obj) => (
        <div className="mb-2">
          <h2 key={obj.id}>
            <span className="text-base font-normal italic">- {obj?.title}</span>
          </h2>
          <p key={obj.id}>
            <span className="text-sm font-light italic pl-2">{obj?.body}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
