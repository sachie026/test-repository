interface Props {
  label: string;
  value: string;
  isChecked: boolean;
  changeHandler: (key: string, val: string) => void;
  fieldKey: string;
}

function RadioButton({
  label,
  value,
  isChecked,
  changeHandler,
  fieldKey,
}: Props) {
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(fieldKey, e.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        checked={isChecked}
        id="default-radio-1"
        type="radio"
        value={value}
        name="default-radio"
        className="w-4 h-4 text-blue bg-gray border-border focus:ring-blue  focus:ring-2"
        onChange={onChangeHandle}
      />
      <label className="ml-2 text-sm font-light text-gray">{label}</label>
    </div>
  );
}

export default RadioButton;
