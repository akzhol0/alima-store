import HomePageCollection from "../home-page/HomePageCollection";
import products from "../../database/products.ts";

function AllProducts() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] 2xl:w-[70%]">
        <HomePageCollection titleBoolean={true} products={products} loaded={true} />
      </div>
    </div>
  );
};

export default AllProducts;
