import {useEffect, useState} from 'react';
import '../../assets/styles/styles.scss'
import HomePageUnitPost from './HomePageUnitPost';
import HomePageGallery from './HomePageGallery';
import HomePageCollWrapper from './HomePageCollWrapper';
import products from "../../database/products.ts";

function HomePage() {
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
          title='Alima Online Store'
          small1='Мой инстаграм: iwavem 🫶
My Tiktok: ibelleem
My Patreon: Alima598
My Boosty: iwavem
Мы предлагаем:
Онлайн услуги,
Вещи для фандомов,
Костюмы для косплея,
Одежды, Бижутерии,
Обувь, Сумки, Аксессуары.
Доставка по Астане от 500 тг.
Доставка по Казахстану и СНГ.'
          small2=''
          img="/img/products/odezhda%20(4).png"
        />
      </div>
      <div className="hidden w-full md:flex flex-nowrap justify-center my-[50px]">
        <HomePageGallery/>
      </div>
      <div className="w-[95%] xl:w-[70%]">
        <HomePageUnitPost
          title='Куртка зимняя короткая оверсайз дутая двусторонняя'
          small1='Идеальный выбор для холодного сезона. Объемная и теплая, она надежно защищает от ветра и мороза, обеспечивая комфорт даже в самые холодные дни. Благодаря двустороннему дизайну можно легко менять образ, сочетая куртку с разными стилями одежды.'
          small2='Можно стирать в машине. 100% хлопок.
'
          img="/img/products/odezhda%20(2).png"
        />
      </div>
      <div className='text-sm px-4'>
        Дипломная работа <br/>
        Тема: Заттарды сату бойынша электрондық коммерцияға арналған "AlimaStore" Web қосымшасының дизайны <br/>
        Сделала: Сайбекова Әлима Бекжанқызы
      </div>
    </div>
  )
}

export default HomePage