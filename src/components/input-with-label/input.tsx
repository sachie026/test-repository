import React from "react";
import Label from "../info-label";
import InputBox from "../input-box";

interface Props {
  isRequired?: boolean;
  text: string;
  placeholder: string;
}

function Input({ isRequired, text, placeholder }: Props) {
  return (
    <>
      {isRequired ? (
        <div className="grid grid-flow-col auto-cols-max">
          <Label text={text} isRequired />
        </div>
      ) : (
        <Label text={text} />
      )}

      <InputBox placeholder={placeholder} mb="mb-6" />
    </>
  );
}

export default Input;
