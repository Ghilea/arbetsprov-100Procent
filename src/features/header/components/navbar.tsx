import { NavLink } from "react-router-dom";

interface Props {
  open: boolean;
}

const Navbar = ({ open }: Props) => {
  const linkStyle =
    "block py-2 pr-4 text-white hover:opacity-50 portrait:text-3xl";

  return (
    <nav className={`${open ? 'portrait:hidden': 'portrait:visible'} flex items-center portrait:absolute portrait:top-20 portrait:left-0 portrait:w-full`}>
      <ul className="relative flex font-bold portrait:flex-col portrait:bg-black/50 portrait:w-full portrait:items-center portrait:gap-y-5 portrait:py-5">
        <li className={linkStyle}>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className={linkStyle}>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
