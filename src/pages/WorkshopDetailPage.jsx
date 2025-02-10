import React, { useState } from "react";
import { FaLongArrowAltLeft, FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTabData } from "../redux/slices/tabSlice";
import { FaArrowRightLong } from "react-icons/fa6";
import { Switch } from "@headlessui/react";
import { FiPlus } from "react-icons/fi";
import Pagination from "../components/Pagination";
import { whatnext } from "../helper/constant";
import { useTranslation } from "react-i18next";

export default function WorkshopDetailPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(t("question"));
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="relative">
      <h3 className="text-sm font-semibold bg-yellow-400 rounded-t px-5 rounded-2xl w-fit ml-auto py-3">
        {t("Draft")}
      </h3>
      <div className="flex items-center gap-10 px-10 pb-10">
        <Link
          to={"/classes"}
          onClick={() => {
            dispatch(setTabData("Dirbtuvės"));
          }}
          className="border cursor-pointer rounded-full flex justify-center items-center size-10 "
        >
          <FaLongArrowAltLeft />
        </Link>
        <h1 className="text-2xl font-semibold">{t("withoutname")}</h1>
      </div>

      <div className="bg-[#F5F5F5] p-10 md:p-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            {/* tab section */}
            <div className="flex items-center gap-3 border rounded-full text-center text-nowrap md:justify-start md:py-3 px-2 py-1.5 md:my-3 bg-white my-5 w-fit overflow-auto ">
              {[
                t("question"),
                t("Settings"),
                t("Statistics"),
                t("feedback").split(" ")[0],
              ]?.map((item) => (
                <div
                  onClick={() => setTab(item)}
                  className={`cursor-pointer ${
                    item === t(tab) &&
                    "bg-darkblue text-white rounded-full px-3 py-1.5"
                  } px-3`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-base font-semibold">
              <button className="secondary-btn px-7 !rounded-full h-11 flex items-center gap-3">
                <FaPlay /> {t("Test")}
              </button>
              <button className="primary-btn px-7 !rounded-full h-11 flex items-center">
                {t("Publish")}
              </button>
            </div>
          </div>

          <div className="flex lg:flex-col justify-center items-start gap-10 mt-10">
            <div className="w-full">
              <div className="flex xs:flex-col justify-between xxs:justify-center items-center bg-white p-5 rounded-3xl">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-lightgray p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-darkblue"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                    />
                  </Switch>
                  <span className="regular-text">{t("edit")}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="regular-text xs:mt-2">{t("json")}</span>
                  <FiPlus
                    fontSize={20}
                    className={`border rounded-full size-8 p-1 flex justify-center items-center`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-2 md:!grid-cols-1 gap-5 my-5">
                {[...Array(8)]?.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl relative border shadow-md flex flex-col items-start justify-center bg-white p-3 cursor-pointer"
                  >
                    <h2 className="base-text mb-2">Pirmasis niutono dėsnis</h2>
                    <div className="pb-10">
                      <img
                        src={`/assets/images/quizcard.png`}
                        alt={item?.text}
                        className="size-[56px] object-contain object-center"
                      />
                    </div>
                    <div className="h-0.5 border-t mb-2 w-full" />
                    <p className="base-text pb-10">
                      Egzistuoja tokios atskaitos sistemos, kuriose kūnas yra
                      rimties būsenos arba juda tolygiai ir tiesiaeigiškai, jei
                      jį veikiančių jėgų dedamoji lygi nuliui.
                    </p>
                    <div className="h-0.5 border-t mb-2 w-full" />
                    <h6 className="base-text mx-auto underline text-center">
                      {t("detail")}
                    </h6>
                  </div>
                ))}
              </div>
              <Pagination />
            </div>

            <div className="md:w-full bg-white rounded-3xl p-5 relative">
              <img
                src="/assets/images/Helper.png"
                alt="helper"
                className="absolute -top-5 right-0"
              />
              <h2 className="text-lg font-bold">Kas toliau?</h2>

              {whatnext?.map(({ title, desc }, index) => (
                <div className="flex items-center justify-between mt-5">
                  <div className="flex-1">
                    <h4 className="regular-text">{title}</h4>
                    <p className="base-text text-lightgray">{desc}</p>
                  </div>
                  <div>
                    <Link
                      to={`#`}
                      className="border cursor-pointer rounded-full flex justify-center items-center size-10"
                    >
                      <FaArrowRightLong fontSize={18} />
                    </Link>
                  </div>
                </div>
              ))}
              <h4 className="regular-text underline mt-2">Neberodyti</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
