import {useContext, useState} from "react";
import {contextData} from "../../../context/logic.tsx";

type BuyModalProps = {
  isOpenPayment: boolean;
  setIsOpenPayment: (arg0: boolean) => void;
}

export default function BuyModal({isOpenPayment, setIsOpenPayment}: BuyModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const {cartProducts, calculateResult} = useContext(contextData);
  const result = calculateResult();

  // @ts-ignore
  return (
    <>
      {isOpenPayment && (
        <div className="fixed right-0 top-0 md:inset-0 flex items-center justify-center md:bg-gray-900 md:bg-opacity-50">
          <div
            className="w-full md:max-w-3xl max-w-full p-6 bg-white rounded-2xl shadow-lg relative flex md:flex-row flex-col gap-6 md:gap-0">
            <div className="w-full pr-4">
              <button onClick={() => setIsOpenPayment(false)} className="absolute top-3 right-3 text-gray-500">✕
              </button>
              <h2 className="text-xl font-semibold mb-4">Оплата</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Адрес доставки</label>
                <input type="text" placeholder="Введите адрес" className="mt-1 w-full px-3 py-2 border rounded-lg"/>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="example@mail.com" className="mt-1 w-full px-3 py-2 border rounded-lg"/>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Способ оплаты</label>
                <div className="mt-2 flex space-x-4">
                  <button onClick={() => setPaymentMethod("visa")}
                          className={`p-2 border rounded-lg ${paymentMethod === "visa" ? "border-blue-600" : "border-gray-300"}`}>
                    <img src="/img/visa.png" alt="Visa" className="h-8"/>
                  </button>
                  <button onClick={() => setPaymentMethod("mastercard")}
                          className={`p-2 border rounded-lg ${paymentMethod === "mastercard" ? "border-blue-600" : "border-gray-300"}`}>
                    <img src="/img/master-card.png" alt="MasterCard" className="h-8"/>
                  </button>
                  <button onClick={() => setPaymentMethod("paypal")}
                          className={`p-2 border rounded-lg ${paymentMethod === "paypal" ? "border-blue-600" : "border-gray-300"}`}>
                    <img src="/img/paypal.png" alt="PayPal" className="h-8"/>
                  </button>
                  <button onClick={() => setPaymentMethod("cash")}
                          className={`p-2 border rounded-lg ${paymentMethod === "cash" ? "border-blue-600" : "border-gray-300"}`}>
                    <img src="/img/вф.png" alt="Наличные" className="h-8"/>
                  </button>
                </div>
              </div>

              {paymentMethod !== 'cash' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Данные карты</label>
                  <div className="grid grid-cols-1 gap-2">
                    <input type="text" placeholder="Номер карты" className="mt-1 w-full px-3 py-2 border rounded-lg"/>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" placeholder="Имя владельца" className="w-full px-3 py-2 border rounded-lg"/>
                      <input type="text" placeholder="CVV" className="w-full px-3 py-2 border rounded-lg"/>
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">Заказать</button>
            </div>

            <div
              className="md:w-4/5 w-full max-h-[400px] overflow-y-scroll overflow-x-hidden bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Ваш заказ</h3>
              <ul className="mb-4 space-y-3">
                {cartProducts.map((item: any) => (
                  <li key={item.id} className="flex items-center border-b pb-3">
                    <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded-lg mr-3"/>
                    <div className="flex-1">
                      <p className="text-sm font-medium max-h-[40px] overflow-y-hidden">{item.title}</p>
                      <p className="text-xs text-gray-500">Кол-во: {item.quantity}</p>
                    </div>
                    <span
                      className="text-sm font-semibold whitespace-nowrap">{item.actualPrice * item.quantity} ₸</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between text-lg font-semibold">
                <span>Итого:</span>
                <span>{result} ₸</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
