import React from "react";

const SubscriptionFooter = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
        SUBSCRIBE
      </h2>
      <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-gray-400"
          >
            Placeholder
          </label>
          <input
            type="text"
            id="footer-field"
            name="footer-field"
            className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Button
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
        Bitters chicharrones fanny pack
        <br className="lg:block hidden" />
        waistcoat green juice
      </p>
    </div>
  );
};

export default SubscriptionFooter;
