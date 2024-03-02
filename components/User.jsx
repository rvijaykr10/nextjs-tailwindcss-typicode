import React from "react";

const User = ({ user }) => {
  return (
    <div className="px-2">
      <div className="flex justify-center items-center h-10">User!</div>
      <div className="mb-2">
        <h2>
          <span className="text-base font-normal italic">- {user?.name}</span>
        </h2>
        <p>
          <span className="text-sm font-light italic pl-2">{user?.email}</span>
        </p>
        <p>
          <span className="text-sm font-light italic pl-2">{user?.phone}</span>
        </p>
        <p>
          <span className="text-sm font-light italic pl-2">
            {user?.website}
          </span>
        </p>
      </div>
    </div>
  );
};

export default User;
