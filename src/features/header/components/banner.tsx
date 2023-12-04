import { Link } from "react-router-dom";

interface Props {
  text: string;
}
const Banner = ({ text }: Props) => {
  return (
    <Link to="/" className="flex items-center justify-center gap-3">
      <div className="flex justify-center items-center bg-red-500 py-2 px-16 text-2xl banner hover:bg-red-200">
        {text}
      </div>
    </Link>
  );
};

export default Banner;
