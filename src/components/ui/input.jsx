import React from "react";

export function Input(props) {
  return (
    <input
      {...props}
      className={
        'border border-gray-300 rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ' +
        (props.className || '')
      }
    />
  );
}
