import Puff from "@/components/card";
import FetchProducts from "./api/fetchProduct";
import AddressNavigation from "@components/addressNavigation";

const ProductList = () => {
  const products = FetchProducts();

  if (products === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-3 my-32">
      <header>
        <AddressNavigation />
      </header>
      <main className="flex flex-row flex-wrap font-roboto text-white gap-x-10 gap-y-24 justify-center">
        {products.map((product, index) => (
          <Puff key={product.title + index} data={product} />
        ))}
      </main>
    </div>
  );
}

export default ProductList;
