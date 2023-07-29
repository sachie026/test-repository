interface Props {
  buttonLabel: string;
  buttonHandler?: (index: number) => void;
  onSave?: () => void;
  leftPaneMsg?: string;
}

function Footer({ buttonLabel, buttonHandler, onSave, leftPaneMsg }: Props) {
  return (
    <div className="flex mb-6  box-border">
      <div className="flex grow justify-start text-left text-sm font-medium items-center text-red">
        {leftPaneMsg ? leftPaneMsg : ""}
      </div>
      <button
        type="submit"
        onClick={() => (buttonHandler ? buttonHandler(2) : onSave && onSave())}
        className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default Footer;
