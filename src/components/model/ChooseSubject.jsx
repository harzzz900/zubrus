import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { subjects } from "../../helper/constant";
import { GoDotFill } from "react-icons/go";
import Pagination from "../Pagination";
import { CiHeart } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export default function ChooseSubject({
  isCreatemodel,
  setIsCreatemodel,
  setIsDetail,
  isDetail,
}) {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog
        open={isCreatemodel}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsCreatemodel(true)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-5xl rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 overflow-y-auto pt-14 md:pt-10"
            >
              <div className="p-6 -mt-14 bg-white relative z-10  rounded-3xl">
                <div className="h-14 border-b flex overflow-auto justify-between items-center text-xl font-semibold">
                  <ul className="flex  items-center gap-5 text-base h-full text-lightgray font-semibold">
                    <li
                      className={`
                        border-b border-black text-black 
                       h-full  flex items-center justify-center cursor-pointer`}
                    >
                      {t("catalog")}
                    </li>
                    <li
                      className={`h-full  flex items-center justify-center cursor-pointer`}
                    >
                      {t("Favorites")}
                    </li>
                    <li
                      className={` h-full  flex items-center justify-center cursor-pointer`}
                    >
                      {t("useit")}
                    </li>
                  </ul>
                  <IoMdClose
                    className="absolute top-7 right-4 cursor-pointer"
                    fontSize={20}
                    onClick={() => {
                      setIsCreatemodel(false);
                    }}
                  />
                </div>
                <div className="flex flex-wrap justify-between items-center my-3">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <div className="size-10 border rounded-full flex justify-center items-center">
                      <IoMdSearch size={24} />
                    </div>
                    <div className="border rounded-full h-10 flex justify-center items-center px-3">
                      {t("Alldisciplines")}
                    </div>
                    <div className="border rounded-full h-10 flex justify-center items-center px-3">
                      {t("allages")}
                    </div>
                    <div className="border rounded-full h-10 flex justify-center items-center px-3">
                      {t("Allauthors")}
                    </div>
                  </div>
                  <div>
                    <div className="border rounded-full h-10 flex justify-center items-center px-3 md:mt-4">
                      {t("Bypopularity")}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 lg:grid-cols-2 xs:grid-cols-1 gap-2 mt-2">
                  {subjects?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setIsDetail(true);
                        setIsCreatemodel(false);
                      }}
                      className="rounded-xl relative  flex flex-col items-start justify-center p-2 cursor-pointer"
                    >
                      <CiHeart className="absolute top-7 right-5 text-3xl bg-white rounded-full p-1" />
                      <img
                        src={item?.img}
                        alt={item?.text}
                        className="w-[261px] xs:w-full h-[180px] md:h-full object-contain object-center"
                      />
                      <div>
                        <div className="text-sm text-lightgray flex gap-2 items-center my-2">
                          <h6 className="text-center"> Fizika</h6>
                          <GoDotFill />
                          <h6 className="text-center"> Zubrus</h6>
                        </div>
                      </div>
                      <span className="line-clamp-1 text-lg font-bold">
                        {item?.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Pagination />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
