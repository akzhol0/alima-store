import { useContext, useState } from "react";
import { contextData } from "../../context/logic";
import en from "../../text/en/textEng";
import ru from "../../text/ru/textRus";

function HeaderBurgerMenu() {
  const [headerBurgerTop, setHeaderBurgerTop] = useState<boolean>(false);
  const { setLangIsEng, langIsEng } = useContext(contextData);
  
  return (
    <div className="w-full flex justify-between py-4 border-b border-gray-200 px-5 md:px-0">
      <div className={headerBurgerTop ? `w-[350px] h-full top-[57px] right-0 fixed flex flex-col items-center text-center md:hidden bg-[#131313] z-10 duration-[.3s]` : 'w-[350px] h-full top-[57px] right-[-400px] fixed flex flex-col items-center text-center md:hidden bg-[#131313] z-10 duration-[.3s]'}>
        <ul className="flex flex-col gap-5 text-white mt-4">
          <li className="cursor-pointer">{langIsEng ? en.header.helpers[0] : ru.header.helpers[0]}</li>
          <li className="cursor-pointer">{langIsEng ? en.header.helpers[1] : ru.header.helpers[1]}</li>
          <li className="cursor-pointer">{langIsEng ? en.header.helpers[2] : ru.header.helpers[2]}</li>
          <li className="cursor-pointer">{langIsEng ? en.header.helpers[3] : ru.header.helpers[3]}</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <span onClick={() => setLangIsEng(false)} className="cursor-pointer">
          <span className={langIsEng ? 'text-gray-400' : 'text-red-500'}>Rus</span>
          </span>
        <span onClick={() => setLangIsEng(true)} className="cursor-pointer">
          <span className={langIsEng ? 'text-red-500' : 'text-gray-400'}>Kaz</span>
          </span>
      </div>
      {/*<div onClick={() => setHeaderBurgerTop(headerBurgerTop ? false : true)} className="flex md:hidden w-[30px] h-[20px] cursor-pointer flex-col justify-between">*/}
      {/*  <span className="w-full h-[2px] bg-black"></span>*/}
      {/*  <span className="w-full h-[2px] bg-black"></span>*/}
      {/*  <span className="w-full h-[2px] bg-black"></span>*/}
      {/*</div>*/}
      <ul className="hidden md:flex gap-5 text-gray-400">
        <li className="cursor-pointer">{langIsEng ? en.header.helpers[0] : ru.header.helpers[0]}</li>
        <li className="cursor-pointer">{langIsEng ? en.header.helpers[1] : ru.header.helpers[1]}</li>
        <li className="cursor-pointer">{langIsEng ? en.header.helpers[2] : ru.header.helpers[2]}</li>
        <li className="cursor-pointer">{langIsEng ? en.header.helpers[3] : ru.header.helpers[3]}</li>
      </ul>
    </div>
  );
}

export default HeaderBurgerMenu;
