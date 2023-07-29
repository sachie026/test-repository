interface Props {
  label: string;
}

function RadioButton({ label }: Props) {
  return (
    <div className="flex items-center">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="w-4 h-4 text-blue bg-gray border-border focus:ring-blue  focus:ring-2"
      />
      <label className="ml-2 text-sm font-light text-gray">{label}</label>
    </div>
  );
}

export default RadioButton;
