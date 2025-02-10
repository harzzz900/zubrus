import { Dialog, DialogPanel } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { activityData } from "../../helper/constant";
import { useDispatch, useSelector } from "react-redux";
import { resetPrivacyData } from "../../redux/slices/coursePrivacySlice";

import { CiHeart } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import SingleCard from "../classdetail/SingleCard";
import { useTranslation } from "react-i18next";

export default function WhocannotSee() {
  const { t } = useTranslation();
  const privacy = useSelector((state) => state.coursePrivacyData.data);
  const dispatch = useDispatch();
  return (
    <div>
      <Dialog
        open={privacy === "Nematoniekas"}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={() => {
          dispatch(resetPrivacyData(""));
        }}
      >
        <div className="fixed inset-0 z-10 w-screen  overflow-y-auto ">
          <div className="flex min-h-full items-center  justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-5xl rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0  overflow-y-auto pt-14 md:pt-10"
            >
              <div className="p-6 -mt-14 bg-white relative z-10  rounded-3xl ">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex justify-start items-center gap-3">
                      <div className="text-xl font-semibold text-center">
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
                      className="absolute top-4 right-4 cursor-pointer"
                      fontSize={20}
                      onClick={() => {
                        dispatch(resetPrivacyData(""));
                      }}
                    />
                  </div>
                </div>

                <div className="h-14 border-b flex flex-wrap justify-between items-center text-xl font-semibold">
                  <ul className="flex flex-wrap items-center gap-5 text-base h-full text-lightgray font-semibold">
                    <li
                      className={` h-full  flex items-center justify-center cursor-pointer`}
                    >
                      {t("question")} (44)
                    </li>
                    <li
                      className={`h-full  flex items-center justify-center cursor-pointer`}
                    >
                      {t("about")}
                    </li>
                    <li
                      className={` border-b border-black text-black h-full  flex items-center justify-center cursor-pointer`}
                    >
                      {t("Statistics")}
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 md:my-3">
                    <button className="bg-darkblue text-white rounded-xl px-5 py-2 text-sm font-bold ">
                      {t("add")}
                    </button>
                    <CiHeart className="border text-3xl bg-white rounded-full p-1" />
                  </div>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-2 md:!grid-cols-1 gap-5 mt-5 md:mt-14">
                  <div>
                    <SingleCard
                      tab={[t("mostactive"), t("passive")]}
                      title={t("activity")}
                      data={activityData}
                    />
                  </div>
                  <div>
                    {" "}
                    <SingleCard
                      tab={[t("best"), t("worst")]}
                      title={t("result")}
                      data={activityData}
                      percentage={true}
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">
                      {t("general")} {t(" Statistics")}
                    </h4>

                    <h5 className="text-sm text-lightgray mt-5">
                      {t("average")} {t("activity")}
                    </h5>
                    <h6 className="text-lg font-semibold">1:34</h6>

                    <h5 className="text-sm text-lightgray mt-5">
                      {t("general")} {t("activity")}
                    </h5>
                    <h6 className="text-lg font-semibold">19:12</h6>

                    <h5 className="text-sm text-lightgray mt-5">
                      {t("average")} {t("result")}
                    </h5>
                    <h6 className="text-lg font-semibold">64%</h6>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
