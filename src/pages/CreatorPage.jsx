import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck, FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CreatorPage() {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(false);
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
          {t("becomecreator")}
        </h3>
      </div>
      <img src="/assets/images/creator.png" alt="creator" />
      <ul className="regular-text space-y-5 list-inside list-disc my-6">
        <li>{t("becomecreatorh1")}</li>
        <li>{t("becomecreatorh2")}</li>
        <li>{t("becomecreatorh3")}</li>
      </ul>
      <span>{t("becomecreatorh4")}</span>{" "}
      {isShow ? (
        <div className="bg-[#E3FDEE] flex  justify-start gap-10 items-center p-7 rounded-3xl  mx-auto my-5 ">
          <FaCheck />
          <div className="text-start">
            <h2 className="medium-text">{t("registered")}!</h2>
            <h3 className="regular-text">{t("newsoon")}</h3>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsShow(true)}
          className="medium-text primary-btn w-full mt-6"
        >
          {t("signup2")}
        </button>
      )}
    </div>
  );
}
