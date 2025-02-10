import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { commonToast } from "../helper/Toast";
import { useTranslation } from "react-i18next";

export default function UserInfo() {
  const { t } = useTranslation();
  const handleSubmit = () => {
    commonToast("Asmeniniai duomenys išsaugoti", "success");
  };
  return (
    <div className="max-w-md mx-auto py-10 md:px-4">
      <div className="flex items-center md:gap-2">
        <Link
          to="/profile"
          className="border cursor-pointer rounded-full flex justify-center items-center size-10"
        >
          <FaLongArrowAltLeft />
        </Link>
        <h3 className="text-lg font-bold flex-1 text-center">
          {t("personaldata")}
        </h3>
      </div>
      <div className="my-10 relative mx-auto w-fit">
        <img
          src="/assets/images/people2.png"
          alt="User"
          className="object-cover size-[144px]"
        />
        <RiPencilFill className="absolute bottom-3 shadow-md right-1 bg-white rounded-full text-4xl p-2" />
      </div>

      <div className=" relative  ">
        <div className="mb-1 absolute z-10 mt-1.5 flex justify-between w-full px-4 text-sm text-gray-500">
          <label className="">{t("name")}</label>
        </div>
        <input
          type="text"
          value={"Lina"}
          placeholder={t("name")}
          className="border h-[56px] w-full z-20 relative rounded-xl bg-transparent px-4 py-2 shadow-inner outline-none placeholder:text-gray-500 text-black tracking-widest pt-5 "
        />
      </div>
      <div className=" relative mt-4">
        <div className="mb-1 absolute z-10 mt-1.5 flex justify-between w-full px-4 text-sm text-gray-500">
          <label className="">{t("lastname")}</label>
        </div>
        <input
          type="text"
          value={"Kairienė"}
          placeholder={t("lastname")}
          className="border h-[56px] w-full z-20 relative rounded-xl bg-transparent px-4 py-2 shadow-inner outline-none placeholder:text-gray-500 text-black tracking-widest pt-5 "
        />
      </div>
      <button
        onClick={() => handleSubmit()}
        className="primary-btn w-full mt-5"
      >
        {t("save")}
      </button>
    </div>
  );
}
