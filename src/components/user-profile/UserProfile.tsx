import { useContext } from "react";
import { contextData } from "../../context/logic";
// import { useNavigate } from "react-router";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import Cookies from "universal-cookie";

function UserProfile() {
  const { setToken, userInfo, setSavedProducts } = useContext(contextData);
  // const navigate = useNavigate();
  const cookies = new Cookies()

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] md:w-[70%] h-[350px] flex flex-col justify-center">
        <div className="">
          <div className="w-[100px] h-[100px] overflow-hidden">
            <img src="/img/user-img.png" alt="user"/>
          </div>
          <span className="flex gap-2 text-[20px]">
          <p>Имя:</p>
          <p className="text-red-400 font-[600]">{userInfo?.name}</p>
        </span>
          <span className="flex gap-2 text-[20px]">
          <p>Фамилия:</p>
          <p className="text-red-400 font-[600]">{userInfo?.surname}</p>
        </span>
          <span className="flex gap-2 text-[20px]">
          <p>Почта:</p>
          <p className="text-red-400 font-[600]">{userInfo?.email}</p>
        </span>
        </div>
        <span onClick={() => {
          localStorage.removeItem('user');
          cookies.remove('auth-token');
          // navigate('/');
          setToken(undefined);
          setSavedProducts([])
        }}>
          <MyDefaultButton className="w-[350px] mt-4">Выйти</MyDefaultButton>
        </span>
      </div>
    </div>
  );
}

export default UserProfile;
