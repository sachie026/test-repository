import React from "react";
import AsteriskIcon from "../../assets/asterisk";

interface Props {
  isRequired?: boolean;
  text: string;
}

function Label({ isRequired, text }: Props) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900  text-left">
        {text}
      </label>
      {isRequired && <AsteriskIcon />}
    </>
  );
}

export default Label;
