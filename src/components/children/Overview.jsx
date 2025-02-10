import React from "react";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import ScoreSingleCard from "../classdetail/ScoreSingleCard";
import { activityData } from "../../helper/constant";
import { useTranslation } from "react-i18next";

export default function Overview() {
  const { t } = useTranslation();
  return (
    <div className="w-[700px] lg:w-screen px-5">
      <div className=" bg-white rounded-3xl p-5">
        <div className="flex justify-start items-center">
          <Link
            to={`#`}
            className="border cursor-pointer rounded-full flex justify-center items-center size-10"
          >
            <IoChevronBack />
          </Link>
          <div className="regular-text flex-1 text-center">
            {t("september")}
          </div>
          <Link
            to={`#`}
            className="border cursor-pointer rounded-full flex justify-center items-center size-10"
          >
            <GrFormNext fontSize={18} />
          </Link>
        </div>
        <div className="flex md:flex-col justify-between items-center mt-3">
          <div className="text-center">
            <h2 className="regular-text capitalize">{t("activity")}</h2>
            <h3 className="subheading-text">3:12</h3>
          </div>
          <div className="text-center">
            <h2 className="regular-text">
              {t("average")}. {t("result")}
            </h2>
            <h3 className="subheading-text">73%</h3>
          </div>
          <div className="text-center">
            <h2 className="regular-text md:mt-5 ">{t("challenge")}</h2>
            <h3 className="subheading-text">2/30</h3>
          </div>
        </div>
      </div>
      <div className="w-full capitalize bg-white rounded-3xl p-5 my-5 ">
        <ScoreSingleCard
          tab={[t("mostactive"), t("passive")]}
          title={t("activity")}
          data={activityData}
        />
      </div>
      <div className="w-full capitalize bg-white rounded-3xl p-5 my-5 ">
        <ScoreSingleCard
          tab={[t("mostactive"), t("passive")]}
          title={t("activity")}
          data={activityData}
        />
      </div>
    </div>
  );
}
