import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="drop-shadow-lg bg-slate-800">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-8 text-white">
            <div>
              <a className="btn btn-ghost normal-case text-3xl font-exo">
                Lu<span className="text-red-500">xery</span>
              </a>
            </div>
            <div className="flex gap-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/addproduct">Add Products</NavLink>
            </div>
            <div className="flex gap-6">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register </NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
