import React from "react";
import { FaClock } from "react-icons/fa";

export default function Select() {
  return (
    <div className="w-72 p-4 border rounded-lg shadow-md bg-white">
        bt 2:
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Input Label
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full p-2 pl-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
        />
        <FaClock className="absolute left-2 top-3 text-gray-400" />
        <div className="absolute right-2 top-3 text-gray-400">&#9650;</div>
      </div>
      <div className="mt-2 border-t border-gray-200">
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
          <span>Label 1</span>
          <input type="checkbox" className="form-checkbox text-blue-500" />
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
          <span>Label 2</span>
          <input type="checkbox" className="form-checkbox text-blue-500" />
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
          <span>Label 3</span>
          <input type="checkbox" className="form-checkbox text-blue-500" />
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
          <span>Label 4</span>
          <input type="checkbox" className="form-checkbox text-blue-500" />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
          Clear
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Apply
        </button>
      </div>
    </div>
  );
}
