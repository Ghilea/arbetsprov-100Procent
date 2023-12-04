import { IProduct } from "@/utiles/interface";
import { Link } from "react-router-dom";

interface Props {
  data: IProduct;
}

const Puff = ({ data }: Props) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-between rounded-3xl h-[430px] w-[300px] shadow-2xl`}
    >
      <div className="text-sm absolute top-[-1em] right-[-1em] bg-red-200 text-black rounded-full h-16 w-16 flex items-center justify-center shadow-2xl z-10">
        {"\u0024 "}
        {data.price}
        
      </div>
      <div className="relative flex flex-col gap-5 items-center justify-between h-full w-[300px] shadow-2xl overflow-hidden rounded-t-3xl bg-white">
        <Link to={`/products/${data.id}`} state={data} className="h-full">
          <img
            className="object-cover w-full h-full"
            src={data.thumbnail}
            alt=""
          />
        </Link>

        <h2 className="absolute bottom-24 left-5 w-36 h-10 bg-gradient-to-b from-[#262829] to-blue-gray-900 z-10 px-3 text-center rounded-xl text-md truncate p-2">
          {data.title}
        </h2>

        <div className="w-full relative">
          <div className="absolute -bottom-12 -left-1 bg-gradient-to-br from-white to-gray-400 w-[320px] h-44 -rotate-[11deg] z-0 rounded-[2em]" />
          <p className="text-xs text-black absolute bottom-8 w-full z-20 text-center line-clamp-2 px-5">
            {data.description}
          </p>
        </div>
      </div>

      <Link
        to={`/products/${data.id}`}
        state={data}
        type="button"
        className="w-full flex items-center justify-center py-3 h-10 bg-gradient-to-br from-[#262829] to-blue-gray-900 rounded-b-3xl"
      >
        Buy now
      </Link>
    </div>
  );
};

export default Puff;
