import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import PopularityFIlter from "../PopularityFIlter";
import SubjectCard from "../SubjectCard";
import DropdownWithCheckboxes from "../DropdownWithCheckboxes";
import { useTranslation } from "react-i18next";

export default function Zubroteka() {
  const { t } = useTranslation();
  const [isExpand, setIsExpand] = useState(false);
  const [filter, setFilter] = useState([
    {
      title: t("filter.popularity"),
      isActive: true,
    },
    {
      title: t("filter.newest"),
      isActive: false,
    },
    {
      title: t("filter.recently_watched"),
      isActive: false,
    },
  ]);

  const handleFilterClick = (index) => {
    const updatedFilter = filter.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setFilter(updatedFilter);
  };
  return (
    <div className="p-10 md:p-5">
      <div className="flex md:flex-col justify-between items-center">
        <h1 className="text-2xl font-semibold">Zubroteka</h1>
        <div className="flex items-center gap-3 md:text-center text-nowrap overflow-auto xxxs:w-full border rounded-full px-2 py-1.5 md:mt-3">
          {[t("catalog"), t("Favorites"), t("useit")]?.map((item) => (
            <div
              className={`cursor-pointer ${
                item === t("catalog") &&
                "bg-darkblue text-white rounded-full px-3 py-1.5"
              } px-3`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex border-t pt-5 mt-5 flex-wrap justify-between items-center my-3">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div
            className=" h-10 relative border cursor-pointer rounded-full flex  items-center transition-width duration-300"
            onClick={() => setIsExpand(true)}
          >
            <IoMdSearch size={24} className="absolute left-2" />
            <input
              type="text"
              className={`${
                isExpand ? "w-full" : "w-10"
              } transition-all duration-100 
                ease-out h-10 border rounded-full ps-10`}
            />
          </div>
          <div className="border rounded-full h-10 flex justify-center items-center">
            <DropdownWithCheckboxes />
          </div>
          <div className="border rounded-full h-10 flex justify-center items-center px-3">
            {t("allages")}
          </div>
          <div className="border rounded-full h-10 flex justify-center items-center px-3">
            {t("Allauthors")}
          </div>
        </div>
        <div>
          <div className="border rounded-full h-10 flex justify-center items-center md:mt-4">
            <PopularityFIlter
              filter={filter}
              setFilter={setFilter}
              handleFilterClick={handleFilterClick}
            />
          </div>
        </div>
      </div>

      <div className="my-10">
        <SubjectCard />
      </div>
    </div>
  );
}
