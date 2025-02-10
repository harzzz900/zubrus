import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltLeft, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(false);
  const [popup, setPopup] = useState(false);
  return (
    <div className="bg-white max-w-4xl  mx-auto my-6 rounded-[32px] p-5 w-[434px] md:w-full">
      <div className="flex justify-start items-center">
        <Link
          to={`/auth/login`}
          className="border cursor-pointer rounded-full flex justify-center items-center size-10"
        >
          <FaLongArrowAltLeft />
        </Link>
        <div className="medium-text flex-1 text-center">{t("register")}</div>
      </div>

      <div className="my-4 relative  ">
        <div className="mb-1 absolute mt-1 flex justify-between w-full px-4 text-sm text-gray-500">
          <label className="">{t("uniquekey")}</label>
          <div className="relative">
            <span
              className="text-blue-500 cursor-pointer hover:underline text-sm z-30 relative"
              onMouseEnter={() => setPopup(true)}
              onMouseLeave={() => setPopup(false)}
            >
              {t("keyinfo")}
            </span>
            {popup && (
              <p className="absolute base-text text-black bg-white rounded-xl shadow-md w-[220px] p-5">
                {t("keydes")}
              </p>
            )}
          </div>
        </div>
        <input
          type="text"
          placeholder="0000 - 0000 - 0000"
          className="border h-[56px] w-full z-20 relative rounded-xl bg-transparent px-4 py-2 shadow-inner outline-none placeholder:text-gray-500 text-black tracking-widest pt-5 "
          pattern="\d{4} - \d{4} - \d{4}"
        />
      </div>
      <input
        type="text"
        placeholder={t("name")}
        className=" regular-text border h-[56px] w-full mb-4 rounded-xl ps-5 shadow-inner outline-none placeholder:text-lightgray text-black"
      />
      <input
        type="text"
        placeholder={t("lastname")}
        className=" regular-text border h-[56px] w-full mb-4 rounded-xl ps-5 shadow-inner outline-none placeholder:text-lightgray text-black"
      />
      <input
        type="text"
        placeholder={t("email")}
        className=" regular-text border h-[56px] w-full mb-4 rounded-xl ps-5 shadow-inner outline-none placeholder:text-lightgray text-black"
      />
      <div className="relative flex items-center  mb-4">
        <input
          type={`${isShow ? "text" : "password"}`}
          placeholder={t("password")}
          className="regular-text border h-[56px] w-full  rounded-xl ps-5 shadow-inner outline-none placeholder:text-lightgray text-black "
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
      <span className="base-text text-lightgray"> {t("confirmmsg")}</span>

      <div className="flex items-center gap-2 base-text mt-6">
        <input
          type="checkbox"
          name=""
          id=""
          className="appearance-none text-white text-lg  flex items-center w-5 h-5 border shadow-inner rounded-lg checked:bg-darkblue checked:border-none checked:ring-0 checked:after:block checked:after:h-7 checked:after:ms-1 checked:after:w-0 checked:after:content-['✓'] checked:after:bg-white"
        />
        <span>
          {t("agree")} <span className="text-darkblue"> {t("rules")} </span>
          {t("and")} <span className="text-darkblue"> {t("policy")}</span>
        </span>
      </div>
      <Link to={`/auth/confirm`}>
        <button type="submit" className="primary-btn w-full mt-6">
          {t("register")}
        </button>
      </Link>
    </div>
  );
}
