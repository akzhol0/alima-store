import HomePageItem from "./HomePageItem";
import MyLoading from "../UI/myLoadingPerfs/MyLoading";
import {useContext} from "react";
import {contextData} from "../../context/logic";
import ru from '../../text/ru/textRus';
import en from '../../text/en/textEng';

type HomePageCollectionProps = {
  loaded: boolean;
  products: any;
  titleBoolean: boolean;
}

function HomePageCollection({ loaded, products, titleBoolean }: HomePageCollectionProps) {
  const { searchBar, langIsEng } = useContext(contextData);

  function filterProducts() {
    return products.filter((item: any) => (
      item.title.toLowerCase()!.includes(searchBar.toLowerCase()))
    );
  }
  const filteredProducts = filterProducts();

  return (
    <>
      {loaded ? (
        <>
          {filteredProducts.length ? (
            <>
              {titleBoolean && (
                <div className='flex flex-col py-5'>
                  <strong className='text-[40px]'>{langIsEng ? en.main.strong : ru.main.strong}</strong>
                  <small className='text-[15px] text-gray-400'>{langIsEng ? en.main.small : ru.main.small}</small>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 place-items-center">
                {products.filter((item: any) => (
                  item.title.toLowerCase().includes(searchBar.toLowerCase()))
                ).map((item: any) => (
                  <HomePageItem key={item.id} item={item} />
                ))}
              </div>
            </>
          ) : (
            <div className="w-full h-[350px] flex justify-center items-center">
                <p className="text-red-400 font-bold text-[20px]">{langIsEng ? 'Empty' : 'Пусто'}</p>
            </div>
          )}
        </>
      ) : (
        <div className='h-[200px] flex justify-center items-center'>
          <MyLoading></MyLoading>
        </div>
      )}
    </>
  );
}

export default HomePageCollection;
