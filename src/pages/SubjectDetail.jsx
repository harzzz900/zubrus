import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import SubjectOverview from "../components/model/SubjectOverview";
import { IoHeart } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function SubjectDetail() {
  const { t } = useTranslation();
  const [isDetail, setIsDetail] = useState(false);
  const [selectedTab, setSelectedTab] = useState(t("Klausimai"));
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="p-5 max-w-[1500px] mx-auto">
      <div className="flex justify-start items-center gap-3">
        <Link
          to={`/classes`}
          className="border cursor-pointer rounded-full flex justify-center items-center size-10"
        >
          <FaLongArrowAltLeft />
        </Link>
        <div className="text-xl font-semibold md:text-center">
          Šiluminiai reiškiniai
          <div className="text-sm font-medium text-lightgray flex gap-2 items-center my-2">
            <h6 className="text-center"> Fizika</h6>
            <GoDotFill />
            <h6 className="text-center"> Zubrus</h6>
            <GoDotFill />
            <h6 className="text-center"> 8-11 kl.</h6>
          </div>
        </div>
      </div>

      <div className="h-14 border-b flex flex-wrap justify-between items-center text-xl font-semibold my-5">
        <ul className="flex flex-wrap items-center gap-5 text-base h-full text-lightgray font-semibold">
          {[t("question"), t("about")].map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedTab(item)}
              className={`${
                item === selectedTab && "border-b border-black text-black "
              } h-full  flex items-center justify-center cursor-pointer`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 md:my-3 cursor-pointer">
          {isLiked ? (
            <IoHeart
              className="border text-3xl text-red-500 rounded-full p-1"
              onClick={() => setIsLiked(false)}
            />
          ) : (
            <CiHeart
              className="border text-3xl bg-white rounded-full p-1"
              onClick={() => setIsLiked(true)}
            />
          )}
        </div>
      </div>
      {selectedTab === t("question") && (
        <>
          <div className="grid grid-cols-4 lg:grid-cols-2 md:!grid-cols-1 gap-5 my-5">
            {[...Array(12)]?.map((item, index) => (
              <div
                key={index}
                onClick={() => setIsDetail(true)}
                className="rounded-xl relative border shadow-md flex flex-col items-start justify-center p-3 cursor-pointer"
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
                  rimties būsenos arba juda tolygiai ir tiesiaeigiškai, jei jį
                  veikiančių jėgų dedamoji lygi nuliui.
                </p>
                <div className="h-0.5 border-t mb-2 w-full" />
                <h6 className="base-text mx-auto underline text-center">
                  {t("detail")}
                </h6>
              </div>
            ))}
          </div>
          <Pagination />
        </>
      )}
      {selectedTab === t("about") && (
        <p className="regular-text max-w-lg">
          {" "}
          Ši mokymosi medžiaga apie šiluminius reiškinius sudaryta iš 44
          mokymosi kortelių, skirtų 9–11 klasių moksleiviams. Kortelėse
          pateikiami pagrindiniai šilumos perdavimo būdai (šilumos laidumas,
          konvekcija, spinduliavimas), medžiagų šiluminės savybės, fazių virsmai
          ir jų energetiniai aspektai. Kiekviena kortelė sukurta taip, kad
          skatintų kritinį mąstymą, pritaikymą praktikoje ir gilų supratimą apie
          šiluminius procesus, remiantis kasdieniais pavyzdžiais, eksperimentais
          ir užduotimis. Mokymosi medžiaga yra aiški, struktūruota ir pritaikyta
          individualiam bei grupiniam mokymuisi.
        </p>
      )}
      {isDetail && (
        <SubjectOverview isDetail={isDetail} setIsDetail={setIsDetail} />
      )}
    </div>
  );
}
