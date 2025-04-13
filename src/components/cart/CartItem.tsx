import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import { contextData } from "../../context/logic";
import { useContext } from "react";

type CartItemProps = {
  item: any;
}

function CartItem({ item }: CartItemProps) {
  const { deleteItemCart, check, setCheck, langIsEng } = useContext(contextData);

  return (
    <div className="w-full h-[80px] flex justify-between items-center rounded-md">
      <div className="w-full h-[80px] flex gap-2 items-center justify-start rounded-md">
        <span className="h-full">
          <img className="w-full h-full object-contain" src={item.image} alt="prod-picture" />
        </span>
        <span className="w-[100px] sm:w-[350px] h-[44px] flex overflow-y-hidden overflow-x-hidden">
          <p>{item.title}</p>
        </span>
        <div className='my-4'>{check ? <p>{item.quantity}</p> : <p>{item.quantity}</p>}</div>
      </div>
      <p className="text-[20px] me-2 md:me-4 whitespace-nowrap">{item.actualPrice} тг</p>
      <span onClick={() => { deleteItemCart(item.id); setCheck(!check)}}>
        <MyDefaultButton>{langIsEng ? 'Өшіру' : 'Удалить'}</MyDefaultButton>
      </span>
    </div>
  );
}

export default CartItem;
