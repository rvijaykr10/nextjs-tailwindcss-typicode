import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between border-b-2 border-black-200 px-2 py-4">
      <Link href="/">
        <h2 className="text-lg font-bold hover:text-slate-500">NTT App</h2>
      </Link>
      <div>
        <Link
          href="/users"
          className="pr-2 hover:cursor-pointer hover:text-slate-500"
        >
          Users
        </Link>
        <Link
          href="/posts"
          className="hover:cursor-pointer hover:text-slate-500"
        >
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
