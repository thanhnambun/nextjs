import React from "react";

export default function Bt1() {
  return (
    <div>
      <p>Bt1</p>
      <input
        placeholder="Placeholder"
        className="placeholder:text-black border p-2 mb-4"
      />
      <button
        type="submit"
        className="text-white bg-[#f476d588] p-2 rounded-md"
      >
        Label
      </button>
    </div>
  );
}
