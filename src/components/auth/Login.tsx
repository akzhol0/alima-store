import { Link, Router, useNavigate } from "react-router-dom";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Cookie from "universal-cookie";
import { contextData } from "../../context/logic";
import ru from "../../text/ru/textRus";
import en from "../../text/en/textEng";

function Login() {
  const navigate = useNavigate();
  const { setToken, langIsEng, setUserInfo, authR, setAuthR } = useContext(contextData)
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const [eye, setEye] = useState<boolean>(false);
  const cookies = new Cookie();

  useEffect(() => {
    authR && ('/user-profile');
  }, [authR, setAuthR])

  function SignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        localStorage.setItem('user', JSON.stringify(login));
        cookies.set('auth-token', userCredential.user.uid);
        setToken(userCredential.user.uid);
        setErr(langIsEng ? 'Succesfully signed in' : 'Успешно вошли');
        setUserInfo(userCredential.user);
        setAuthR(true);
        navigate('/user-profile');

        setTimeout(() => {
          navigate("/");
        }, 100)

        setTimeout(() => {
          window.location.reload();
        }, 1000)
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
    <div className="w-full flex justify-center">
      <div className="w-[95%] md:w-[75%] flex justify-center items-center">
        <form onSubmit={SignIn} className="w-[400px] h-[500px] flex flex-col mt-2 items-center bg-[#131313] rounded-[15px] gap-4">
          <p className="text-[30px] text-white border-b mb-4">{langIsEng ? en.signin.titleAndButton : ru.signin.titleAndButton}</p>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-[320px] h-[45px] placeholder-black ps-4 bg-[#fff] border border-gray-400 rounded-lg"
            placeholder='Почта'
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
  );
}

export default Login;
