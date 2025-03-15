import { useContext } from "react";
import { contextData } from "../../../context/logic";

function MyModal() {
  const { setModal, langIsEng } = useContext(contextData);

  setTimeout(() => {
    setModal(false);
  }, 1500)

  return (
    <div className="z-20 fixed anim top-5 right-5 py-2 px-4 bg-red-500 text-white rounded-lg cursor-default">
      {langIsEng ? "Корзинаға қосылды" : 'Добавлено в корзину'}
    </div>
  );
}

export default MyModal;
