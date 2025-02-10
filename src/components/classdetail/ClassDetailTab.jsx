import React from "react";
import { classestab } from "../../helper/constant";
import { useDispatch, useSelector } from "react-redux";
import { setTabData } from "../../redux/slices/classtab";
import Overview from "./Overview";
import Material from "./Material";
import People from "./People";
import { useTranslation } from "react-i18next";

export default function ClassDetailTab() {
  const { t } = useTranslation();
  const selectedTab = useSelector((state) => state.classtabData.data);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white overflow-auto flex items-center gap-3 w-fit xxs:w-full  py-2 px-3 rounded-[35px] regular-text">
        {classestab?.map(({ tab }) => (
          <div
            className={`cursor-pointer md:text-center md:text-nowrap ${
              selectedTab === tab &&
              "bg-darkblue text-white rounded-full px-3 py-1.5"
            } px-3`}
            onClick={() => dispatch(setTabData(tab))}
          >
            {/* {tab} */}
            {t(`tabs.${tab}`)}
          </div>
        ))}
      </div>
      <div className="my-10">
        {selectedTab === "Apžvalga" ||
          selectedTab.includes("Apžvalga") ||
          ((selectedTab === "overview" || selectedTab.includes("overview")) && (
            <Overview />
          ))}
        {selectedTab === "Medžiaga" ||
          selectedTab.includes("Medžiaga") ||
          ((selectedTab === "material" || selectedTab.includes("material")) && (
            <Material />
          ))}
        {selectedTab === "Žmonės" ||
          selectedTab.includes("Žmonės") ||
          ((selectedTab === "people" || selectedTab.includes("people")) && (
            <People />
          ))}
      </div>
    </>
  );
}
