import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltLeft, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ChangePasswordPage() {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(false);
  const [isHide, setIsHide] = useState(false);
  return (
    <div className="max-w-md mx-auto py-10 md:px-4">
      <div className="flex items-center md:gap-2 mb-10">
        <Link
          to="/profile"
          className="border cursor-pointer rounded-full flex justify-center items-center size-10"
        >
          <FaLongArrowAltLeft />
        </Link>
        <h3 className="text-lg font-bold flex-1 text-center">
          {t("changepassword")}
        </h3>
      </div>
      <div className="relative flex items-center">
        <input
          type={`${isShow ? "text" : "password"}`}
          placeholder={`${t("current")} ${t("password")}`}
          className="border h-[56px] w-full relative rounded-xl bg-transparent px-4 py-2 shadow-inner outline-none placeholder:text-gray-500 text-black tracking-widest "
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
      <div className="relative flex items-center mt-5">
        <input
          type={`${isHide ? "text" : "password"}`}
          placeholder={`${t("new")} ${t("password")}`}
          className="border h-[56px] w-full relative rounded-xl bg-transparent px-4 py-2 shadow-inner outline-none placeholder:text-gray-500 text-black tracking-widest "
        />
        {isHide ? (
          <MdOutlineRemoveRedEye
            className="absolute cursor-pointer right-5 text-xl"
            onClick={() => setIsHide(!isHide)}
          />
        ) : (
          <FaRegEyeSlash
            className="absolute cursor-pointer right-5 text-xl"
            onClick={() => setIsHide(!isHide)}
          />
        )}
      </div>

      <button className="primary-btn w-full mt-5">{t("changepassword")}</button>
    </div>
  );
}
