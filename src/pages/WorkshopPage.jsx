import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { subjects } from "../helper/constant";
import CreateDeckModel from "../components/model/CreateDeckModel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function WorkshopPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className="p-10 md:p-5">
      <div className="flex md:flex-col justify-between items-center">
        <h1 className="text-2xl font-semibold">{t("deckworkshop")}</h1>
        <div className="flex items-center gap-3">
          <h2 className="regular-text ">{t("creatdeck")}</h2>
          <FiPlus
            fontSize={20}
            onClick={() => setOpen(true)}
            className={`border cursor-pointer rounded-full size-8 p-1 flex justify-center items-center`}
          />
        </div>
      </div>
      <div className="flex border-t pt-5 mt-5 flex-wrap justify-between items-center my-3">
        <div className="flex items-center text-center text-nowrap overflow-auto gap-3 border rounded-full px-2 py-1.5 md:mt-3">
          {[t("all"), t("Draft"), t("Published")]?.map((item) => (
            <div
              className={`cursor-pointer ${
                item === t("all") &&
                "bg-darkblue text-white  rounded-full px-3 py-1.5"
              } px-3 text-center`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap w-full items-center gap-5 mt-5">
        {subjects?.slice(0, 2).map((item, index) => (
          <Link
            to={`/workshop/${item?.id}`}
            key={index}
            className="rounded-xl relative md:w-full  flex flex-col items-start justify-center  cursor-pointer"
          >
            <div className="absolute top-0 left-0   bg-yellow-500 rounded-tl-full rounded-br-full px-5 py-2 text-sm font-semibold">
              {t("Draft")}
            </div>
            <img
              src={item?.img}
              alt={item?.text}
              className="w-full h-[230px] md:h-full object-cover rounded-xl"
            />
            <span className="line-clamp-1 text-lg mt-3 font-bold">
              {item?.text}
            </span>
          </Link>
        ))}
      </div>
      {open && <CreateDeckModel open={open} setOpen={setOpen} />}
    </div>
  );
}
