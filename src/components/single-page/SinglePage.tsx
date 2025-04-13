import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import MyDefaultButton from '../UI/my-buttons/MyDefaultButton';
import { contextData } from '../../context/logic';
import MyLoading from '../UI/myLoadingPerfs/MyLoading';
import ru from '../../text/ru/textRus';
import en from '../../text/en/textEng';
import {db} from "../../firebase/config.ts";
import { doc, getDoc } from "firebase/firestore";


function SinglePage() {
  const { addCartItem, langIsEng, savedProducts } =
    useContext(contextData);
  const { id } = useParams();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [product, setProduct] = useState<any>([]);
  let navigate = useNavigate();

  const getProductById = async (id: string) => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setProduct(data);
        setLoaded(true);
      } else {
        console.log("❌ No such document!");
      }
    } catch (error) {
      console.error("❌ Error fetching document:", error);
    }
  };

  function foo() {
    const savedIds: number[] = [];
    savedProducts.map((item: any) => savedIds.push(item.id));
    return savedIds;
  }
  const savedItemsIds = foo();

  savedItemsIds.map((itemcb: number) => {
    if (itemcb === product.id) {

    }
  });

  // const getSingleProd = async () => {
  //   products.map((item: any) => {
  //     if (Number(id) === item.id) {
  //       setProduct(item);
  //       setLoaded(true);
  //     }
  //   })
  // };

  useEffect(() => {
    if (!loaded && id) {
      getProductById(id);
    }
  }, [id, loaded]);
  console.log(product)
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] xl:w-[70%]">
        <div className="w-full my-2">
          <span onClick={() => navigate('/')}>
            <MyDefaultButton>{langIsEng ? 'Go Back' : 'Назад'}</MyDefaultButton>
          </span>
        </div>
        {loaded ? (
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-full md:w-[50%] md:h-[600px] relative overflow-hidden">
              <img
                className="w-full h-full bg-white"
                src={product.image}
                alt="picture-product"
              />
              <span className="absolute top-3 left-3 w-[30px] h-[30px] rounded flex justify-center items-center text-white bg-red-500">
                {product.rate}
              </span>
            </div>
            <div className="w-full md:w-[50%] px-10">
              <div className="w-full flex flex-col item-center">
                <p title={product.title} className="text-[30px] text-bold">
                  {langIsEng ? product.titleKaz : product.title}
                </p>
                <p className="text-[20px] -mt-2">Категория: {langIsEng ? product.categoryKaz : product.category}</p>
                <p className="text-[20px] mt-4">{langIsEng ? product.descriptionKaz : product.description}</p>
                <p className="text-[20px] mt-4">Размер {product?.sizes}</p>
                <span className="w-auto flex justify-center items-center gap-1 py-2 text-white text-[20px] bg-red-500 rounded-md my-1">
                  <p>{product.actualPrice} тенге</p>
                  <sub className="line-through text-[#afafaf]">
                    {Math.round(product.actualPrice / 5 + product.actualPrice)} тенге
                  </sub>
                </span>
                <div
                  onClick={() => {
                    addCartItem(product);
                  }}>
                  <MyDefaultButton className="w-full py-3 mt-2">
                    {langIsEng ? en.singlePage.addToCart : ru.singlePage.addToCart}
                  </MyDefaultButton>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center h-[400px]">
            <MyLoading></MyLoading>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePage;
