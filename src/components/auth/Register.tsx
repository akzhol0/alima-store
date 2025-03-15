import { Link, useNavigate } from "react-router-dom";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { contextData } from "../../context/logic";
import en from "../../text/en/textEng";
import ru from "../../text/ru/textRus";

function Register() {
  const { langIsEng } = useContext(contextData)
  const navigate = useNavigate();
  const [eye, setEye] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  function signUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== repeatPassword) {
      setErr(langIsEng ? "Passwords don't match" : 'Пароли не совпадают')
      return;
    } 

    createUserWithEmailAndPassword(auth, login, password)
      .then(() => {
        navigate("/auth/login");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          setErr(langIsEng ? "Incorrent email" : "Почта неправильная!");
        } else if (err.code === "auth/missing-password") {
          setErr(langIsEng ? "Incorrent password" : "Неправильный пароль!");
        } else if (err.code === "auth/weak-password") {
          setErr(langIsEng ? "Weak password" : "Слабый пароль!");
        } else if (err.code === "auth/email-already-in-use") {
          setErr(langIsEng ? "This email already other user using" : "Эта почта уже используется");
        } else {
          setErr(err.code);
        }
      });
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] md:w-[75%] h-[550px] flex justify-center items-center">
        <form onSubmit={signUp} className="w-[400px] h-[500px] flex flex-col items-center bg-[#131313] rounded-[15px] gap-4">
          <p
            className="text-[30px] text-white border-b mb-4">{langIsEng ? en.signup.titleAndButton : ru.signup.titleAndButton}</p>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-[320px] h-[45px] placeholder-black ps-4 bg-[#fff] border border-gray-400 rounded-lg"
            placeholder={langIsEng ? en.signup.loginPlaceholder : ru.signup.loginPlaceholder}
            type="text" />
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[320px] h-[45px] placeholder-black ps-4 bg-[#fff] border border-gray-400 rounded-lg"
              placeholder={langIsEng ? en.signup.passwordPlaceholder : ru.signup.passwordPlaceholder}
              type={eye ? 'text' : 'password'} />
            <span onClick={() => setEye(eye ? false : true)}>
              <img className="absolute top-1 right-1 cursor-pointer" width={40} height={40} src="/img/eye.png" alt="eye picture" />
            </span>
          </div>
          <div className="relative">
            <input
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-[320px] h-[45px] placeholder-black ps-4 bg-[#fff] border border-gray-400 rounded-lg"
              placeholder={langIsEng ? en.signup.repeatPasswordPlaceholder : ru.signup.repeatPasswordPlaceholder}
              type={eye ? 'text' : 'password'} />
            <span onClick={() => setEye(eye ? false : true)}>
              <img className="absolute top-1 right-1 cursor-pointer" width={40} height={40} src="/img/eye.png" alt="eye picture" />
            </span>
          </div>
          <MyDefaultButton type='submit' className="w-[320px]">{langIsEng ? en.signup.titleAndButton : ru.signup.titleAndButton}</MyDefaultButton>
          <Link to='/auth/login'>
            <p className="text-white cursor-pointer hover:underline">{langIsEng ? en.signup.sign : ru.signup.sign}</p>
          </Link>
          <p className="text-red-400">{err}</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
