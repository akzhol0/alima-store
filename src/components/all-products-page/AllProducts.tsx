import HomePageCollection from "../home-page/HomePageCollection";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase/config.ts";
import {useEffect, useState} from "react";

function AllProducts() {
  const [products, setProducts] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);

  const getItems = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const items = snapshot.docs.map(doc => ({
      idDoc: doc.id,
      ...doc.data()
    }));

    items.map((item: any) => {
      setProducts((prev: any) => [...prev, item]);
    })
    setLoaded(true);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] 2xl:w-[70%]">
        {loaded ? (
          <HomePageCollection titleBoolean={true} products={products} loaded={true} />
        ) : (
          <div>Загрузка</div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
