import React from "react";

interface Props {
  placeholder: string;
  mb?: string;
  wrap?: boolean;
  value?: string;
  fieldKey: string;
  changeHandler: (key: string, val: string) => void;
  type?: string;
}

function InputBox({
  placeholder,
  mb = "",
  wrap,
  value,
  changeHandler,
  fieldKey,
  type = "text",
}: Props) {
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(fieldKey, e.target.value);
  };

  const component = (
    <input
      type={type}
      className={`${mb} bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandle}
    />
  );

  if (wrap) {
    return <div>{component}</div>;
  }

  return component;
}

export default InputBox;
