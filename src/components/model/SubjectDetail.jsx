import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Pagination from "../Pagination";
import { CiHeart } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ChooseSubject({
  setIsDetail,
  isDetail,
  isCreatemodel,
  setIsCreatemodel,
  addTask,
}) {
  const { t } = useTranslation();
  const handleAddTask = () => {
    addTask();
    setIsDetail(false);
  };
  return (
    <div>
      <Dialog
        open={isDetail}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsDetail(true)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-5xl rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 overflow-y-auto pt-14 md:pt-10"
            >
              <div className="p-6 -mt-14 bg-white relative z-10  rounded-3xl">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex justify-start items-center gap-3">
                      <div
                        className="border cursor-pointer rounded-full flex justify-center items-center size-10"
                        onClick={() => {
                          setIsDetail(false);
                          setIsCreatemodel(true);
                        }}
                      >
                        <FaLongArrowAltLeft />
                      </div>
                      <div className="text-xl md:pt-2 font-semibold md:text-center">
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
                  </div>
                  <div>
                    <IoMdClose
                      className=" cursor-pointer absolute top-7 right-4"
                      fontSize={20}
                      onClick={() => {
                        setIsDetail(false);
                      }}
                    />
                  </div>
                </div>

                <div className="h-14 border-b flex flex-wrap justify-between items-center text-xl font-semibold">
                  <ul className="flex flex-wrap items-center gap-5 text-base h-full text-lightgray font-semibold">
                    <li
                      className={`
                        border-b border-black text-black 
                       h-full  flex items-center justify-center cursor-pointer`}
                    >
                      {t("question")} (44)
                    </li>
                    <li
                      className={`h-full  flex items-center justify-center cursor-pointer`}
                    >
                      {t("about")}
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 md:mt-2">
                    <button
                      onClick={handleAddTask}
                      className="bg-darkblue text-white rounded-xl px-5 py-2 text-sm font-bold"
                    >
                      {t("add")}
                    </button>
                    <CiHeart className="border text-3xl bg-white rounded-full p-1" />
                  </div>
                </div>

                <div className="grid grid-cols-4 lg:grid-cols-2 md:!grid-cols-1 gap-2 mt-5 md:mt-14">
                  {[...Array(4)]?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setIsDetail(true)}
                      className="rounded-xl relative border shadow-md flex flex-col items-start justify-center p-3 cursor-pointer"
                    >
                      <h2 className="base-text mb-2">
                        Pirmasis niutono dėsnis
                      </h2>
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
                        rimties būsenos arba juda tolygiai ir tiesiaeigiškai,
                        jei jį veikiančių jėgų dedamoji lygi nuliui.
                      </p>
                      <div className="h-0.5 border-t mb-2 w-full" />
                      <h6 className="base-text mx-auto underline text-center">
                        Detaliau
                      </h6>
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
