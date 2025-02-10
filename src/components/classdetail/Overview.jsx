import React from "react";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { activityData, COLORS, overviewdata } from "../../helper/constant";
import SingleCard from "./SingleCard";
import ScoreSingleCard from "./ScoreSingleCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Overview() {
  const { t } = useTranslation();
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="flex lg:flex-col justify-center items-start gap-10">
      <div className="max-w-5xl w-[880px] lg:w-full">
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
          <div className="flex md:flex-col justify-between items-center ">
            <div className="flex justify-center items-center">
              {/* <ResponsiveContainer width="100%" height="100%"> */}
              <PieChart width={200} height={200}>
                <Pie
                  data={overviewdata}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {overviewdata.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              {/* </ResponsiveContainer> */}
              <div className="regular-text flex flex-col items-center  w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-between items-center xs:w-fit xs:gap-3 w-full">
                    <div className="size-2 bg-darkblue rounded-full"></div>
                    <span>Zubrino</span>
                    <span>65%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-between items-center xs:w-fit xs:gap-3  w-full">
                    <div className="size-2 bg-[#FF4F62] rounded-full"></div>
                    <span>Nezubrino</span>
                    <span>65%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="regular-text">{t("average") + t(" activity")}</h2>
              <h3 className="subheading-text">3:12</h3>
            </div>
            <div className="text-center">
              <h2 className="regular-text md:mt-5 ">
                {t("average") + t(" result")}
              </h2>
              <h3 className="subheading-text">73%</h3>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="flex lg:flex-col  justify-center items-center gap-5 lg:gap-0 ">
          <div className="w-1/2 capitalize lg:w-full bg-white rounded-3xl p-5 my-5 lg:my-0 lg:mt-5">
            <SingleCard
              tab={[t("mostactive"), t("passive")]}
              title={t("activity")}
              data={activityData}
            />
          </div>
          <div className="w-1/2 capitalize lg:w-full bg-white rounded-3xl p-5 my-5">
            <SingleCard
              tab={[t("best"), t("worst")]}
              title={t("result")}
              data={activityData}
              percentage={true}
            />
          </div>
        </div>

        {/* third section */}
        <div className="flex lg:flex-col justify-center items-center gap-5 lg:gap-0 ">
          <div className="w-1/2 lg:w-full bg-white rounded-3xl p-5 my-5 lg:my-0">
            <ScoreSingleCard title={t("deckspopularity")} data={activityData} />
          </div>
          <div className="w-1/2 lg:w-full bg-white rounded-3xl p-5 my-5">
            <ScoreSingleCard title={t("deckscore")} data={activityData} />
          </div>
        </div>
      </div>

      <div className="md:w-full bg-white rounded-3xl p-5 relative">
        <img
          src="/assets/images/Helper.png"
          alt="helper"
          className="absolute -top-5 right-0"
        />
        <h2 className="text-lg font-bold">{t("whatnext")}</h2>

        <div className="flex items-center justify-between mt-5">
          <div className="flex-1">
            <h4 className="regular-text line-through">
              {t("add")} {t(`tabs.material`)}
            </h4>
            <p className="base-text text-lightgray">{t("overviewh2")}</p>
          </div>
          <div className="">
            <img src="/assets/images/Circle.png" alt="circle" srcset="" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex-1">
            <h4 className="regular-text line-through"> {t("Invitepeople")}</h4>
            <p className="base-text text-lightgray">{t("oa2")}</p>
          </div>
          <div className="">
            <img src="/assets/images/Circle.png" alt="circle" srcset="" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex-1">
            <h4 className="regular-text">{t("oq3")}</h4>
            <p className="base-text text-lightgray">{t("oa3")}</p>
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
        <h4 className="regular-text underline mt-2">{t("hide")}</h4>
      </div>
    </div>
  );
}
