import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between border-b-2 border-black-200 px-2 py-4">
      <h2>NTT App</h2>
      <div>
        <a>Users</a>
        <a>Posts</a>
      </div>
    </nav>
  );
};

export default Navbar;
