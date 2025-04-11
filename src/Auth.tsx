import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "./firebase/config.ts";
import {useContext, useEffect, useState} from "react";
import en from "./text/en/textEng.ts";
import ru from "./text/ru/textRus.ts";
import MyDefaultButton from "./components/UI/my-buttons/MyDefaultButton.tsx";
import {Link, useNavigate} from "react-router-dom";
import {contextData} from "./context/logic.tsx";
import { collection, addDoc } from "firebase/firestore";

const Auth = () => {
  const {langIsEng, setAuth} = useContext(contextData)
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const [eye, setEye] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    actualPrice: 0,
    img: "",
    category: "Другие",
    size: "",
    rate: 4.2,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(form).some((value) => String(value).trim() === "")) {
      alert("Заполните все поля");
      return;
    }

    addItem(form);
  };

  const addItem = async (data: any) => {
    try {
      const docRef = await addDoc(collection(db, "products"), data);
      console.log("Document written with ID: ", docRef.id);
      navigate('/all-products');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    const res = localStorage.getItem("user");

    if (res === 'loggedin') {
      setLoaded(true)
    }
  }, [])

  function SignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        localStorage.setItem('user', JSON.stringify(userCredential.user));
        localStorage.setItem('user', 'loggedin')
        setErr(langIsEng ? 'Succesfully signed in' : 'Успешно вошли');
        setLoaded(true);
        setAuth(true);
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          setErr(langIsEng ? "Incorrent email" : "Неправильная почта");
        } else if (err.code === "auth/missing-password") {
          setErr(langIsEng ? "There is no password" : "Пароль не написан");
        } else if (err.code === "auth/invalid-credential") {
          setErr(langIsEng ? "Email or password is incorrect" : "Почта или пароль не правильный");
        } else {
          setErr(err.code);
        }
      });
  }

  return (
    loaded ? (
      <div className="mx-1 max-w-xl sm:mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Добавить продукт</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Название"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          />
          <textarea
            name="description"
            placeholder="Описание"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 transition resize-none"
          />
          <input
            type="number"
            name="actualPrice"
            placeholder="Цена"
            value={form.actualPrice}
            onChange={(e) =>
              setForm({ ...form, actualPrice: Number(e.target.value) })
            }
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          />
          <input
            type="text"
            name="img"
            placeholder="Ссылка на изображение"
            value={form.img}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          />
          <input
            type="text"
            name="size"
            placeholder="Размеры (если есть)"
            value={form.size}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          />

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-700 transition font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div className="w-full flex justify-center">
        <div className="w-[95%] md:w-[75%] flex justify-center items-center">
          <form onSubmit={SignIn} className="w-[400px] h-[500px] flex flex-col mt-2 items-center bg-[#131313] rounded-[15px] gap-4">
            <p className="text-[30px] text-white border-b mb-4">{langIsEng ? en.signin.titleAndButton : ru.signin.titleAndButton}</p>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-[320px] h-[45px] placeholder-black ps-4 bg-[#fff] border border-gray-400 rounded-lg"
              placeholder={langIsEng ? en.signin.loginPlaceholder : ru.signin.loginPlaceholder}
              type="text" />
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[320px] h-[45px] placeholder-black ps-4 bg-[#fff] border border-gray-400 rounded-lg"
                placeholder={langIsEng ? en.signin.passwordPlaceholder : ru.signin.passwordPlaceholder}
                type={eye ? 'text' : 'password'} />
              <span onClick={() => setEye(eye ? false : true)}>
              <img className="absolute top-1 right-1 cursor-pointer" width={40} height={40} src="/img/eye.png" alt="eye picture" />
            </span>
            </div>
            <MyDefaultButton type="submit" className="w-[320px]">{langIsEng ? en.signin.titleAndButton : ru.signin.titleAndButton}</MyDefaultButton>
            <Link to='/auth/register'>
              <p className="text-white cursor-pointer hover:underline">{langIsEng ? en.signin.sign : ru.signin.sign}</p>
            </Link>
            <p className="text-red-400">{err}</p>
          </form>
        </div>
      </div>
    )
  );
};

export default Auth;