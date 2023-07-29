import React from "react";
import Label from "../info-label";
import InputBox from "../input-box";

interface Props {
  isRequired?: boolean;
  text: string;
  placeholder: string;
  wrap?: boolean;
  fieldKey: string;
  value?: string;
  changeHandler: (fieldKey: string, val: string) => void;
}

function Input({
  isRequired,
  text,
  placeholder,
  wrap,
  value,
  changeHandler,
  fieldKey,
}: Props) {
  const component = (
    <>
      {isRequired ? (
        <div className="grid grid-flow-col auto-cols-max">
          <Label text={text} isRequired />
        </div>
      ) : (
        <Label text={text} />
      )}

      <InputBox
        placeholder={placeholder}
        mb="mb-6"
        value={value}
        fieldKey={fieldKey}
        changeHandler={changeHandler}
      />
    </>
  );

  if (wrap) return <div>{component}</div>;

  return component;
}

export default Input;
