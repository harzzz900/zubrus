import React, { useState } from "react";
import { FaLongArrowAltRight, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTabData } from "../redux/slices/tabSlice";
import { commonToast } from "../helper/Toast";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setTabData("classes"));
    commonToast("sėkmingai prisijungė", "success");
  };

  return (
    <div>
      <div className="bg-white max-w-4xl flex md:flex-col justify-start items-center gap-10 mx-auto my-6 rounded-[32px] p-5">
        <div className="w-1/2 md:w-full md:hidden">
          <img
            src="/assets/images/loginposterzubrus.png"
            alt="Login Poster"
            className="w-full h-[536px] "
          />
        </div>
        <div className="w-1/2 md:w-full">
          <h3 className="subheading-text mb-6"> {t("login")}</h3>

          <input
            type="text"
            placeholder="Vartotojo vardas"
            className=" regular-text border h-[56px] w-full rounded-xl ps-5 shadow-inner outline-none placeholder:text-lightgray text-black"
          />
          <div className="relative flex items-center  mt-6">
            <input
              type={`${isShow ? "text" : "password"}`}
              placeholder="Slaptažodis"
              className="regular-text border h-[56px] w-full rounded-xl ps-5 shadow-inner outline-none placeholder:text-lightgray text-black "
            />
            {isShow ? (
              <MdOutlineRemoveRedEye
                className="absolute cursor-pointer right-5 text-xl"
                onClick={() => setIsShow(!isShow)}
              />
            ) : (
              <FaRegEyeSlash
                className="absolute cursor-pointer right-5 text-xl"
                onClick={() => setIsShow(!isShow)}
              />
            )}
          </div>
          <Link to={`/classes`}>
            <button
              onClick={() => handleLogin()}
              type="submit"
              className="medium-text primary-btn w-full mt-6"
            >
              {t("login")}
            </button>
          </Link>
          <hr className="my-6" />

          <div className="flex justify-between items-center ">
            <span className="regular-text">{t("firstTime")}</span>
            <Link
              to={`/auth/signup`}
              className="regular-text text-darkblue cursor-pointer flex items-center gap-2"
            >
              {t("signup")} <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
