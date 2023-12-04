import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}
export const DefaultButton = ({ children, to }: Props) => {
  return (
    <Link
      to={`/${to}`}
      className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 w-fit"
    >
      {children}
    </Link>
  );
};
