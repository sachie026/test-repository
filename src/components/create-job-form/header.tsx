interface Props {
  title: string;
  subTitle: string;
}

function Header({ title, subTitle }: Props) {
  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <label className="block mb-2 text-xl font-light text-gray-900 dark:text-white text-left">
        {title}
      </label>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
        {subTitle}
      </label>
    </div>
  );
}

export default Header;
