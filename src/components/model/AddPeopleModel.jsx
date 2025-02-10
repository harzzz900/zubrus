import { Dialog, DialogPanel } from "@headlessui/react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { classes } from "../../helper/constant";
import Pagination from "../Pagination";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function AddPeopleModel({ isaddpeople, setisAddPeople }) {
  const { t } = useTranslation();
  const [tab, setTab] = useState(t("search"));
  return (
    <div>
      <Dialog
        open={isaddpeople}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setisAddPeople(true);
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-md rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="p-6  bg-white relative z-10  rounded-3xl">
                <div className="flex justify-between items-center text-xl font-semibold">
                  <h2>
                    {t("add")} {t("people")}
                  </h2>
                  <IoMdClose
                    className="absolute right-5 top-5 cursor-pointer"
                    fontSize={20}
                    onClick={() => {
                      setisAddPeople(false);
                    }}
                  />
                </div>
                <div className="h-14 border-b flex flex-wrap justify-between items-center text-xl font-semibold">
                  <ul className="flex flex-wrap items-center gap-5 text-base h-full text-lightgray font-semibold">
                    {[t("search"), t("class")]?.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => setTab(item)}
                        className={`${
                          item === t(tab) && "border-b border-black text-black "
                        } h-full  flex items-center justify-center cursor-pointer`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center">
                  <IoMdSearch
                    className="absolute ms-2 text-lightgray"
                    fontSize={24}
                  />
                  <input
                    type="text"
                    placeholder={`${t("name")} , ${t("lastname")}`}
                    className=" regular-text border h-[56px] my-5 w-full rounded-xl ps-10 shadow-inner outline-none placeholder:text-lightgray text-black"
                  />
                </div>

                <div className="space-y-3">
                  {tab === t("search") ? (
                    <>
                      <div className="mb-5">
                        <div className="flex text-sm capitalize items-center gap-3 border rounded-xl w-fit px-2 py-2">
                          {[t("activity"), t("Performance")]?.map((item) => (
                            <div
                              className={`cursor-pointer ${
                                item === t("activity") &&
                                "bg-darkblue text-white rounded-lg px-2 py-1"
                              } px-3`}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      {classes?.slice(0, 5)?.map((item, key) => (
                        <div
                          key={key}
                          className="flex justify-between items-center"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src="/assets/images/Avatar.png"
                              alt="Avatar"
                              className="size-10 rounded-full"
                            />
                            <span className="regular-text">{item?.name}</span>
                          </div>
                          <div>
                            <FiPlus
                              fontSize={20}
                              className={`border cursor-pointer rounded-full size-8 p-1 flex justify-center items-center`}
                            />
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    classes?.slice(0, 5)?.map((item, key) => (
                      <div
                        key={key}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center gap-3">
                          <span className="regular-text">{item?.name}</span>
                        </div>
                        <div>
                          <FiPlus
                            fontSize={20}
                            className={`border cursor-pointer rounded-full size-8 p-1 flex justify-center items-center`}
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-5">
                  <Pagination datalength={5} />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
