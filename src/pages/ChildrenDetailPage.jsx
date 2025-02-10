import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Overview from "../components/children/Overview";
import Material from "../components/children/Material";
import { useTranslation } from "react-i18next";
import { classestab } from "../helper/constant";

export default function ChildrenDetailPage() {
  const { t } = useTranslation();
  const data = useSelector((state) => state?.classData?.data);
  const [selectedtab, SelectedTab] = useState(t("overview"));

  return (
    <div className="">
      <div className="p-10">
        <Link
          to="/mychildren"
          className="border cursor-pointer rounded-full flex justify-center items-center size-10 "
        >
          <FaLongArrowAltLeft />
        </Link>
      </div>

      <div
        style={{ backgroundColor: data?.backgroundcolor }}
        className="relative flex flex-col items-center justify-center"
      >
        <img
          src={data?.thumbnail}
          alt={data?.name}
          srcset=""
          className="mx-auto absolute -top-16 bg-yellow-500 size-[144px] object-contain object-center rounded-full shadow-md"
        />
        <div className="py-24 text-center">
          <h1 className="text-2xl font-semibold">Rytis Bulėnas</h1>
          <h2 className="regular-text text-lightgray mt-2">
            {t("Statistics")}
          </h2>
          {/* tab section */}
          <div className="flex items-center gap-3 border rounded-full px-2 py-1.5 md:my-3 bg-white my-5 w-fit mx-auto">
            {classestab?.slice(0, 2)?.map(({ tab }) => (
              <div
                onClick={() => SelectedTab(tab)}
                className={`cursor-pointer ${
                  selectedtab === tab &&
                  "bg-darkblue text-white rounded-full px-3 py-1.5"
                } px-3`}
              >
                {t(`tabs.${tab}`)}
              </div>
            ))}
          </div>
          <div className="max-w-7xl">
            {selectedtab === "Apžvalga" ||
              selectedtab.includes("Apžvalga") ||
              ((selectedtab === "overview" ||
                selectedtab.includes("overview")) && <Overview />)}
            {selectedtab === "Medžiaga" ||
              selectedtab.includes("Medžiaga") ||
              ((selectedtab === "material" ||
                selectedtab.includes("material")) && <Material />)}
          </div>
        </div>
      </div>
    </div>
  );
}
