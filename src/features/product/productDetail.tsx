import { useLocation } from "react-router-dom";
import Carousel from "@components/carousel";
import AddressNavigation from "@components/addressNavigation";
import Information from "./components/information";

function ProductDetail() {
  const location = useLocation();

  if (!location.state) {
    return <div>Produkten hittades inte.</div>;
  }

  const product = location.state;

  return (
    <>
      <div className="flex flex-col text-white gap-2 my-32 w-full">
        <header>
          <AddressNavigation>{product.title}</AddressNavigation>
        </header>
        <main className="flex flex-col portrait:flex-col gap-24 bg-white/20 px-10 py-24 rounded-2xl">
          <header className="flex gap-16 justify-evenly items-center">
            <section className="w-1/2 flex flex-col gap-5">
              <h1 className="text-2xl">
                {product.brand} ({product.category})
              </h1>
              <Carousel imageData={product.images} />
            </section>
            <section className="flex flex-col gap-3">
              <h1 className="text-3xl">{product.title}</h1>
              <p>{product.description}</p>
              <h2 className="text-2xl mt-10">
                {"\u0024 "}
                {product.price}
              </h2>
              <h2>In stock: {product.stock}</h2>
              <h2>Rating: {product.rating} / 5</h2>
              <button
                type="button"
                className="rounded-3xl px-5 py-2 mt-5 font-bold text-center bg-gray-900 hover:bg-gray-600"
              >
                Add to chart
              </button>
            </section>
          </header>
          <section>
            <Information />
            <div className="mt-24 font-bold bg-red-600 rounded-2xl px-5 py-3 text-center">
              Buy today and get a discounted price by{" "}
              {product.discountPercentage}%
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default ProductDetail;
