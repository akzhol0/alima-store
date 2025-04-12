import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import HomePageCollection from "../home-page/HomePageCollection";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import MyLoading from "../UI/myLoadingPerfs/MyLoading";
import { contextData } from "../../context/logic";
import products from "../../database/products.ts";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase/config.ts";

function CategoryProd() {
  const {langIsEng} = useContext(contextData)
  const { categoryTitle } = useParams()
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [productsS, setProductsS] = useState<any>([]);

  const getItems = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const items = snapshot.docs.map(doc => ({
      idDoc: doc.id,
      ...doc.data()
    }));

    items.map((item: any) => {
      if (categoryTitle === item.category) {
        setProductsS((prev: any) => [...prev, item]);
        setLoaded(true);
      }
    })
  }

  const getCategoryProducts = async () => {
    if (true) {
      products.map((item: any) => {
        if (categoryTitle === item.category) {
          setProductsS((prev: any) => [...prev, item]);
          setLoaded(true);
        }
      })
    }

  //   const url = `https://fakestoreapi.com/products/category/${categoryTitle}`;
  //   const options = {
  //     method: 'GET'
  //   }
  //
  //   try {
  //     const response = await fetch(url, options)
  //     const result = await response.json()
  //
  //     setProductsS(result)
  //     setLoaded(true)
  //   } catch (e) {
  //     console.error(e)
  //   }
   }

  useEffect(() => {
    setProductsS([]);
    setLoaded(false);
    getItems();
    getCategoryProducts();
  }, [categoryTitle])

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] 2xl:w-[70%]">
        <span onClick={() => navigate('/')}>
          <MyDefaultButton className="mt-2">{langIsEng ? 'Артқа қайту' : 'Назад'}</MyDefaultButton>
        </span>
        {loaded ? (
          <HomePageCollection titleBoolean={true} products={productsS} loaded={loaded} />
        ) : (
          <div className="h-[500px] text-center">
            <MyLoading></MyLoading>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryProd;
