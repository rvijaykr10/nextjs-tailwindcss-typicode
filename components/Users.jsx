import React from "react";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div className="px-2">
      <div className="flex justify-center items-center h-10">Users!</div>
      {users?.map((obj) => (
        <div key={obj.id} className="mb-2">
          <h2>
            <span className="text-base font-normal italic">- {obj?.name}</span>
          </h2>
          <p>
            <span className="text-sm font-light italic pl-2">{obj?.email}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
