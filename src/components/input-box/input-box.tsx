import React from "react";

interface Props {
  placeholder: string;
  mb?: string;
}

function InputBox({ placeholder, mb = "" }: Props) {
  return (
    <input
      type="text"
      className={`${mb} bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
      placeholder={placeholder}
    />
  );
}

export default InputBox;
