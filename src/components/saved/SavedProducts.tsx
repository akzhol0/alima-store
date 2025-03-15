import { useContext } from "react";
import HomePageCollection from "../home-page/HomePageCollection";
import { contextData } from "../../context/logic";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";

function SavedProducts() {
  const { savedProducts, langIsEng, getAllSavedItems, token } = useContext(contextData);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] md:w-[70%] min-h-[400px] border rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-2 font-semibold text-[25px]">{langIsEng ? 'Saved Products' : 'Сохраненные товары'}
          {token !== undefined && (
            <span onClick={() => getAllSavedItems()}>
              <MyDefaultButton className="text-[20px]">
                {langIsEng ? 'Load saved items' : 'Загрузить'}
              </MyDefaultButton>
            </span>
          )}
        </div>
        <HomePageCollection titleBoolean={false} loaded={true} products={savedProducts} />
      </div>
    </div>
  );
}

export default SavedProducts;
