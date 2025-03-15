import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'universal-cookie';
import { collection, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

type ContextProps = {
  cartProducts: any;
  addCartItem: (arg0: any) => any;
  calculateResult: () => React.ReactNode;
  deleteItemCart: (arg0: number) => void;
  check: boolean;
  setCheck: (arg0: boolean) => void;
  modal: boolean;
  setModal: (arg0: boolean) => void;
  searchBar: string;
  setSearchBar: (arg0: string) => void;
  langIsEng: boolean;
  setLangIsEng: (arg0: boolean) => void;
  token: any;
  setToken: (arg0: any) => void;
  savedProducts: any;
  addSaveditem: (arg0: any) => void;
  deleteSaveditem: (arg0: number) => void;
  userInfo: any;
  getAllSavedItems: () => void;
  setSavedProducts: (arg0: any) => void;
  setUserInfo: (arg0: any) => void;
  getCartItemLS: () => void;
};

export const contextData = createContext({} as ContextProps);

type ContextOverAllProps = {
  children: React.ReactNode;
};

export function ContextOverAll({ children }: ContextOverAllProps) {
  const cookies = new Cookies();
  const [check, setCheck] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<any>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<string>('');
  const [langIsEng, setLangIsEng] = useState<boolean>(true);
  const [token, setToken] = useState(cookies.get('auth-token'));
  const [savedProducts, setSavedProducts] = useState<any>([]);
  const [userInfo, setUserInfo] = useState<any>([]);
  const [fetched, setFetched] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
    !fetched && getCartItemLS()
  }, [])

  // get all cart items from local storage
  const getCartItemLS = () => {
    for (let i = 0; i < 21; i++) {
      const res = localStorage.getItem(`cartItem${i}`);
      const cartItem = res ? JSON.parse(res) : null;

      if (cartItem !== null) {
        setCartProducts((prev: any) => [...prev, cartItem])
      }
    }
    setFetched(true);
  }

  // get all saved items from firestore
  const getAllSavedItems = async () => {
    setSavedProducts([]);
    const querySnapshot = await getDocs(collection(db, `${userInfo.email}`));
    querySnapshot.forEach((doc) => {
      setSavedProducts((prev: any) => [...prev, doc.data()])
    });
  }

  // get user info from ls
  const getUserInfo = () => {
    if (token === undefined) {
      navigate('/')
      return;
    }

    const res = localStorage.getItem('user');
    const user = res ? JSON.parse(res) : null;
    setUserInfo(user)
  }

  // add to saved
  const addSaveditem = (item: any) => {
    if (token === undefined) {
      navigate('/auth/login');
      return;
    };

    addSavedItemFirestore(item)
    const addIds: number[] = [];
    savedProducts.map((item: any) => addIds.push(item.id))

    if (!addIds.includes(item.id)) {
      setSavedProducts((prev: any) => [...prev, item]);
    }
  }

  // delete  saved
  const deleteSaveditem = async (id: number) => {
    setSavedProducts(savedProducts.filter((item: any) => item.id !== id));
    await deleteDoc(doc(db, `${userInfo.email}`, `savedItem${id}`));
  }

  // add saved item to firestore
  const addSavedItemFirestore = async (item: any) => {
    await setDoc(
      doc(
        db,
        `${userInfo.email}`,
        `savedItem${item.id}`,
      ), {
      ...item
    })
  }

  // add cart item
  const addCartItem = (item: any) => {
    const res = localStorage.getItem(`cartItem${item.id}`)
    const cartParsedItem = res ? JSON.parse(res) : null;
    if (cartParsedItem === null) {
      localStorage.setItem(`cartItem${item.id}`, JSON.stringify({ ...item, quantity: 1 }))
    } else {
      cartParsedItem.quantity += 1;
      localStorage.setItem(`cartItem${item.id}`, JSON.stringify(cartParsedItem))
    }

    setModal(true)
    const addIds: number[] = [];
    cartProducts.map((item: any) => addIds.push(item.id))

    if (addIds.includes(item.id)) {
      cartProducts.map((itemProd: any) => {
        if (item.id === itemProd.id) {
          itemProd.quantity += 1;
        }
      });
    } else {
      setCartProducts((prev: any) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  // delete cart item
  function deleteItemCart(itemId: number) {
    const res = localStorage.getItem(`cartItem${itemId}`)
    const cartParsedItem = res ? JSON.parse(res) : null;

    if (cartParsedItem.quantity === 1) {
      localStorage.removeItem(`cartItem${itemId}`)
    } else {
      cartParsedItem.quantity -= 1;
      localStorage.setItem(`cartItem${itemId}`, JSON.stringify(cartParsedItem))
    }

    cartProducts.map((item: any) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          setCartProducts(cartProducts.filter((item: any) => item.id !== itemId));
        }
      }
    });
  }

  // calculate result
  const calculateResult = () => {
    let result = 0;

    cartProducts.forEach((item: any) => {
      result += Number(item.actualPrice * item.quantity);
    })

    return result;
  }

  return (
    <contextData.Provider value={{
      cartProducts,
      addCartItem,
      calculateResult,
      deleteItemCart,
      check,
      setCheck,
      modal,
      setModal,
      searchBar,
      setSearchBar,
      langIsEng,
      setLangIsEng,
      token,
      setToken,
      savedProducts,
      addSaveditem,
      deleteSaveditem,
      userInfo,
      getAllSavedItems,
      setSavedProducts,
      setUserInfo,
      getCartItemLS,
    }}>
      {children}
    </contextData.Provider>
  );
}