import hamburgerIcon from "@assets/icons/hamburger.svg";

interface Props {
  onClick: () => void;
}

const Hamburger = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="items-center p-2 text-sm text-gray-500 rounded-lg landscape:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <img src={hamburgerIcon} className="w-10 h-10" alt="hamburger menu" />
    </button>
  );
};

export default Hamburger;
