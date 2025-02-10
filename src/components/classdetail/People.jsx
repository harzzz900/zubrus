import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { Menu, MenuButton } from "@headlessui/react";
import { peoples } from "../../helper/constant";
import { GoDotFill } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import StatisticModel from "../model/StatisticModel";
import DeleteModel from "../model/DeleteModel";
import AddPeopleModel from "../model/AddPeopleModel";
import { MdOutlineGraphicEq } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function People() {
  const { t } = useTranslation();
  const [isaddpeople, setisAddPeople] = useState(false);
  const [isStatistic, setisStatistic] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  return (
    <div className="flex lg:flex-col justify-center items-start gap-10">
      <div className="max-w-5xl w-[880px] lg:w-full">
        <div className={`bg-white p-5 rounded-3xl`}>
          <div className="flex sm:flex-col justify-between items-center">
            <div className="flex items-center md:text-center gap-3 border rounded-xl px-2 py-2">
              {[t("all"), `${t("teacher")} (30)`, `${t("student")} (29)`]?.map(
                (item) => (
                  <div
                    className={`cursor-pointer ${
                      item === t("all") &&
                      "bg-darkblue text-white rounded-lg px-3 py-1"
                    } px-3`}
                    //   onClick={() => dispatch(setTabData(tab))}
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="flex items-center gap-3 sm:mt-3">
              <Menu>
                <MenuButton
                  onClick={() => setisAddPeople(true)}
                  className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold   focus:outline-none data-[open]:rounded-full  data-[open]:bg-[#F2F3FF] data-[focus]:outline-1 "
                >
                  <span className="regular-text">{t("add")}</span>
                  <FiPlus
                    fontSize={20}
                    className={`border rounded-full size-8 p-1 flex justify-center items-center`}
                  />
                </MenuButton>
              </Menu>
            </div>
          </div>
          <div className="my-5">
            <div className="space-y-5">
              {peoples?.map((item, index) => (
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={item?.img}
                      className="size-20 rounded-full object-cover"
                      alt="Avatar "
                      srcset=""
                    />
                    <div>
                      <h2 className="text-lg font-bold">{item?.name}</h2>
                      <div className="text-sm font-medium text-mediumgray flex gap-2 items-center my-2">
                        <h6 className="text-center"> Fizika</h6>
                        <GoDotFill fontSize={14} className="text-[10px]" />
                        <h6 className="text-center"> Zubrus</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <h6
                      onClick={() => setisStatistic(true)}
                      className="regular-text underline cursor-pointer"
                    >
                      <span className="xxs:hidden"> {t("Statistics")}</span>
                      <MdOutlineGraphicEq className="xxs:block hidden" />
                    </h6>
                    <span>
                      {" "}
                      <IoCloseOutline
                        fontSize={24}
                        className="cursor-pointer"
                        onClick={() => setIsDelete(true)}
                      />{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full bg-white rounded-3xl p-5 relative w-[316px] lg:w-full">
        <img
          src="/assets/images/Helper.png"
          alt="helper"
          className="absolute -top-5 right-0"
        />
        <h2 className="text-lg font-bold">{t("whatpeople")}</h2>

        <div className="flex items-center justify-between mt-5">
          <div>
            <h4 className="regular-text ">{t("student")}</h4>
            <p className="base-text text-lightgray">{t("pq1")}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div>
            <h4 className="regular-text ">{t("teacher")}</h4>
            <p className="base-text text-lightgray">{t("pq2")}</p>
          </div>
        </div>
        <h6 className="underline mt-5 regular-text ">{t("hide")}</h6>
      </div>
      {isStatistic && (
        <StatisticModel
          isStatistic={isStatistic}
          setisStatistic={setisStatistic}
        />
      )}
      {isDelete && (
        <DeleteModel isDelete={isDelete} setIsDelete={setIsDelete} />
      )}
      {isaddpeople && (
        <AddPeopleModel
          isaddpeople={isaddpeople}
          setisAddPeople={setisAddPeople}
        />
      )}
    </div>
  );
}
