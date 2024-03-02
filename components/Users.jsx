import Link from "next/link";
import React from "react";

const Users = ({ users }) => {
  return (
    <div className="px-2">
      <div className="flex justify-center items-center h-10">Users!</div>
      {users?.map((obj) => (
        <div key={obj.id} className="mb-2">
          <Link
            href={`users/${obj?.id}`}
            className="hover:cursor-pointer hover:text-slate-500"
          >
            <span className="text-base font-normal italic">- {obj?.name}</span>
          </Link>
          <p>
            <span className="text-sm font-light italic pl-2">{obj?.email}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
