import React from "react";

const FooterLinks1 = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
        CATEGORIES
      </h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-400 hover:text-white">First Link</a>
        </li>
        <li>
          <a className="text-gray-400 hover:text-white">Second Link</a>
        </li>
        <li>
          <a className="text-gray-400 hover:text-white">Third Link</a>
        </li>
        <li>
          <a className="text-gray-400 hover:text-white">Fourth Link</a>
        </li>
      </nav>
    </div>
  );
};

export default FooterLinks1;
