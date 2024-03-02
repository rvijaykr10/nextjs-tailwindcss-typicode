import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="px-2">
      <div className="flex justify-center items-center h-10">Posts!</div>
      {posts?.map((obj) => (
        <div className="mb-2" key={obj?.id}>
          <h2>
            <span className="text-base font-normal italic">- {obj?.title}</span>
          </h2>
          <p>
            <span className="text-sm font-light italic pl-2">{obj?.body}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
