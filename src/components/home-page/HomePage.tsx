import {useContext, useEffect, useState} from 'react';
import '../../assets/styles/styles.scss'
import {contextData} from '../../context/logic';
import HomePageUnitPost from './HomePageUnitPost';
import ru from '../../text/ru/textRus';
import en from '../../text/en/textEng';
import HomePageGallery from './HomePageGallery';
import HomePageCollWrapper from './HomePageCollWrapper';
import products from "../../database/products.ts";

function HomePage() {
  const {langIsEng} = useContext(contextData);
  const [productsUnderEight, setProductsUnderEight] = useState<any>([]);

  useEffect(() => {
    productsUnderEight.length === 0 && getProd();
  }, []);

  const getProd = () => {
    products.map((item: any) => {
      if (item.id >= 12 && item.id <= 19) {
        setProductsUnderEight((prev: any) => [...prev, item])
      }
    })
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="w-[95%] xl:w-[70%] h-auto">
        <div className="w-full h-[450px] flex justify-center bg-[#f5cc51]">
          <img className='mt-[20px] object-contain' src="/img/bg123.png"/>
        </div>
      </div>
      <HomePageCollWrapper loaded={true} products={productsUnderEight}/>
      <div className="w-[95%] xl:w-[70%]">
        <HomePageUnitPost
          title={langIsEng ? en.homePage.titlefirst : ru.homePage.titlefirst}
          small1={langIsEng ? en.homePage.smallfirst1 : ru.homePage.smallfirst1}
          small2={langIsEng ? en.homePage.smallfirst2 : ru.homePage.smallfirst2}
          img="/img/hp-pic-4.png"
        />
      </div>
      <div className="hidden w-full md:flex flex-nowrap justify-center my-[50px]">
        <HomePageGallery/>
      </div>
      <div className="w-[95%] xl:w-[70%]">
        <HomePageUnitPost
          title={langIsEng ? en.homePage.titlesecond : ru.homePage.titlesecond}
          small1={langIsEng ? en.homePage.smallsecond1 : ru.homePage.smallsecond1}
          small2={langIsEng ? en.homePage.smallsecond2 : ru.homePage.smallsecond2}
          img="/img/hp-pic-5.png"
        />
      </div>
    </div>
  )
}

export default HomePage