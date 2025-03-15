import { Link } from "react-router-dom";
import HomePageCollection from "./HomePageCollection";
import { contextData } from "../../context/logic";
import { useContext } from "react";

type HomePageCollWrapperProps = {
  loaded: boolean;
  products: any;
}

function HomePageCollWrapper({ loaded, products }: HomePageCollWrapperProps) {
  const { langIsEng } = useContext(contextData);
  
  return (
    <div className="w-[95%] xl:w-[70%]">
      <HomePageCollection titleBoolean={true} loaded={loaded} products={products} />
      <div className='w-full flex justify-center py-5'>
        <Link to='/all-products'>
          <button className='py-2 px-5 border border-gray-500 rounded-lg hover:bg-gray-200 duration-200'>
            {langIsEng ? 'Барлык товарлар' : 'Все популярные товары'}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePageCollWrapper;
