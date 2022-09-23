import React from "react";
import { IPFSInput, Input, Select, TextArea } from "web3uikit";

const createcollection = () => {
  return (
    <div className="m-1">
      <section className="bg-cream-lighter p-4 shadow">
        <div className="md:flex">
          <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
            Create New Location
          </h2>
        </div>
        <form>
          <div className="md:flex mb-8">
            <div className="md:w-1/3">
              <legend className="uppercase tracking-wide text-sm">Location</legend>
              <p className="text-xs font-light text-red">
                This entire section is required.
              </p>
            </div>
            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <div className="mb-4">
                <label className="block uppercase tracking-wide text-xs font-bold">
                  Name
                </label>
                <input
                  className="w-full shadow-inner p-4 border-0"
                  type="text"
                  name="name"
                  placeholder="Acme Mfg. Co."
                />
              </div>
              <div className="md:flex mb-4">
                <div className="md:flex-1 md:pr-3">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                    Street Address
                  </label>
                  <textarea
                    className="w-full shadow-inner p-4 border-0"
                    type="text"
                    name="address_street"
                    placeholder="555 Roadrunner Lane"
                  />
                </div>
                <div className="md:flex-1 md:pl-3">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                    Building/Suite No.
                  </label>
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <legend className="uppercase tracking-wide text-sm">
                Cover Image
              </legend>
            </div>
            <div className="md:flex-1 px-3 text-center">
              <div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
                <label className="flex justify-center w-full max-w-xs h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-full appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span className="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input type="file" name="file_upload" className="hidden" />
                </label>

              </div>
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <legend className="uppercase tracking-wide text-sm">
                Cover Image
              </legend>
            </div>
            <div className="md:flex-1 px-3 text-center">
              <div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
                <label className="flex justify-center w-full max-w-sm h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span className="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input type="file" name="file_upload" className="hidden" />
                </label>

              </div>
            </div>
          </div>
          <button type="button" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>

        </form>
      </section>
    </div>
  );
};

export default createcollection;
