import {useContext, useEffect, useState} from "react";
import MyCartIcon from "../UI/my-icons/MyCartIcon";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderCategories from "./HeaderCategories";
import {Link, useNavigate} from "react-router-dom";
import MyModal from "../UI/my-modals/MyModal";
import {contextData} from "../../context/logic";
import en from "../../text/en/textEng";
import ru from "../../text/ru/textRus";
import categories from "../../database/categories.ts";

function Header() {
  const {modal, setSearchBar, langIsEng} = useContext(contextData);
  const [categoriesState, setCategoriesState] = useState<string[]>([]);
  const [loadedCategories, setLoadedCategories] = useState<boolean>(false);
  const [tempSearchBar, setTempSearchBar] = useState<string>('');
  const navigate = useNavigate();

  const getAllCategories = async () => {
    setCategoriesState(categories);
    setLoadedCategories(true);
  }

  function navigateFunc(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSearchBar(tempSearchBar);
    navigate('/all-products');
  }

  useEffect(() => {
    !loadedCategories && getAllCategories();
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] xl:w-[70%]">
        <HeaderBurgerMenu/>
        <div className="w-full flex justify-between py-4 px-4">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-red-500 rounded-[50%]">
              <img src="/img/cart.png" width={25} height={25}/>
            </div>
            <span onClick={() => setSearchBar('')}>
              <Link to='/'><p className="text-[35px] text-red-500 font-bold whitespace-nowrap">Alima Store</p></Link>
            </span>
          </div>
          <form onSubmit={navigateFunc} className="hidden md:flex items-center relative">
            <input
              onChange={(e) => setTempSearchBar(e.target.value)}
              value={tempSearchBar}
              className="md:w-[300px] xl:w-[500px] h-full ps-4 border border-gray-400 rounded-md"
              type="text"
              placeholder={langIsEng ? en.header.input : ru.header.input}/>
            <button onClick={() => setSearchBar(tempSearchBar)} className="absolute right-1">
              <Link to='/all-products'>
                <div
                  className="w-[45px] h-[45px] flex justify-center items-center rounded-md bg-red-500 cursor-pointer">
                  <img src="/img/s.png" width={25} height={25}/>
                </div>
              </Link>
            </button>
          </form>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex ps-4 items-center text-[18px]">
              <Link to='/cart'><span className="cursor-pointer flex items-center gap-2"> <span
                className="w-[22px] h-[22px] mt-[-1px] whitespace-nowrap"><MyCartIcon/></span> {langIsEng ? en.header.userOptions[2] : ru.header.userOptions[2]}</span></Link>
            </div>
            <div className="flex items-center text-[18px]">
              <Link to='/auth'>
                  <div>
                    Аккаунт
                  </div>
              </Link>
            </div>
          </div>

        </div>

        <div className="flex md:hidden items-center relative">
          <input
            onChange={(e) => setTempSearchBar(e.target.value)}
            value={tempSearchBar}
            className="w-full h-[60px] mb-4 ps-4 z-2 border border-gray-400 rounded-md"
            type="text"
            placeholder={langIsEng ? en.header.input : ru.header.input}/>
          <button onClick={() => setSearchBar(tempSearchBar)} className="absolute right-2 bottom-[24px]">
            <Link to='/all-products'>
              <div className="w-[45px] h-[45px] flex justify-center items-center rounded-md bg-red-500 cursor-pointer">
                <img src="/img/s.png" width={25} height={25}/>
              </div>
            </Link>
          </button>
        </div>
        <HeaderCategories categories={categoriesState} loadedCategories={loadedCategories}/>
        {modal && (
          <MyModal></MyModal>
        )}
      </div>
    </div>
  )
}

export default Header