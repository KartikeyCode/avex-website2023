import React from "react";

const Navbar = () => {
  return (
    <div className="navbar border-2 z-50 top-2 max-w-xs lg:max-w-xl fixed left-1/2 -translate-x-1/2">
      <div className="flex-1">
        <a href="/" className="ml-9"> <img src="/images/Logo.png" alt="Avex Logo" /> </a>
      </div>
      <div className="">
        <ul className="menu menu-horizontal space-x-5 px-1 hidden lg:flex">
          <li>
            <a
              href="/"
              className="font-inter font-bold"
              style={{ color: "#7d7d7d" }}>
              {" "}
              DID{" "}
            </a>
          </li>
          <li> <a href="#Features" className="font-inter font-bold" style={{ color: "#7d7d7d" }}> {" "} Features{" "} </a></li>
          <li><a href="/waitlist" className="font-inter font-bold" style={{ color: "#7d7d7d" }}> Join Waitlist </a></li>
        </ul>
        <details className="dropdown dropdown-end lg:hidden">
          <summary className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </summary>
          <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 gap-3">
            <li>
              {" "}
              <a
                href="/"
                className="font-inter font-bold"
                style={{ color: "#7d7d7d" }}>
                {" "}
                Use Cases{" "}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-inter font-bold"
                style={{ color: "#7d7d7d" }}>
                {" "}
                Blogs{" "}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-inter font-bold"
                style={{ color: "#7d7d7d" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
