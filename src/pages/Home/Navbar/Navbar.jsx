import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch(error => {
      console.log(error);
    })
  }
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/workspace"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 underline font-semibold px-1 py-1"
              : "font-semibold px-1 py-1"
          }
        >
          Workspace
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/recent"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 underline font-semibold px-1 py-1"
              : "font-semibold px-1 py-1"
          }
        >
          Recent
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"templates"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 underline font-semibold px-1 py-1"
              : "font-semibold px-1 py-1"
          }
        >
          Templates
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            className=" hidden sm:flex items-center justify-center sm:text-xl lg:text-2xl font-bold"
          >
            <img
              className="w-7 h-7 lg:w-10 lg:h-10 -mr-1.5"
              src={logo}
              alt="Logo"
            />
            CC Technovision Inc.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogout} className="btn bg-blue-500 text-white hover:bg-blue-700">Logout</button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-blue-500 text-white hover:bg-blue-700"
            >
              Let&apos;s Explore
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
