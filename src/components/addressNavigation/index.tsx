import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const AddressNavigation = ({ children }: Props) => {
  const arrow = <span className="text-2xl mb-1">{"\u203A"}</span>;

  return (
    <div className="flex items-center justify-start py-5 text-sm text-white gap-3">
      <Link
        to="/"
        className="flex items-center justify-center gap-3 font-bold underline hover:opacity-50"
      >
        Home
      </Link>
      {arrow}
      <Link
        to="/products"
        className="flex items-center justify-center gap-3 font-bold underline hover:opacity-50"
      >
        Products
      </Link>
      {children && arrow}
      {children}
    </div>
  );
};

export default AddressNavigation;
