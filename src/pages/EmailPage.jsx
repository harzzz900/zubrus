import React from "react";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EmailPage() {
  const { t } = useTranslation();
  return (
    <div className="max-w-md mx-auto py-10 md:px-4">
      <div className="flex items-center md:gap-2 mb-10">
        <Link
          to="/profile"
          className="border cursor-pointer rounded-full flex justify-center items-center size-10"
        >
          <FaLongArrowAltLeft />
        </Link>
        <h3 className="text-lg font-bold flex-1 text-center">{t("email")}</h3>
      </div>
      <div className=" relative  ">
        <div className="mb-1 absolute z-10 mt-1.5 flex justify-between w-full px-4 text-sm text-gray-500">
          <label className="">{t("email")}</label>
        </div>
        <input
          type="text"
          value={"lina.kairiene@sddn.edu"}
          placeholder={t("email")}
          className="border h-[56px] w-full z-20 relative rounded-xl bg-transparent px-4 py-2 shadow-inner outline-none placeholder:text-gray-500 text-black tracking-widest pt-5 "
        />
      </div>
      <h3 className="text-sm text-gray-500 mt-4">{t("emailconfimmsg")}</h3>
      <button className="primary-btn w-full mt-5">{t("save")}</button>
    </div>
  );
}
