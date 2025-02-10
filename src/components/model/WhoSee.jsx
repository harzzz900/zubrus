import { Dialog, DialogPanel, Switch } from "@headlessui/react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { classes } from "../../helper/constant";
import { useDispatch, useSelector } from "react-redux";
import { resetPrivacyData } from "../../redux/slices/coursePrivacySlice";
import { useState } from "react";
import Pagination from "../Pagination";
import { useTranslation } from "react-i18next";

export default function WhoSee() {
  const { t } = useTranslation();
  const [enabled] = useState(false);
  const privacy = useSelector((state) => state.coursePrivacyData.data);
  const dispatch = useDispatch();
  return (
    <div>
      <Dialog
        open={privacy === "matovisi"}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          dispatch(resetPrivacyData(""));
        }}
      >
        <div className="fixed inset-0 z-[60] w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-md rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="p-6  bg-white relative z-10  rounded-3xl">
                <div className="flex justify-between items-center text-xl font-semibold">
                  <h2>{t("whosee")}</h2>
                  <IoMdClose
                    className="absolute right-5 top-5 cursor-pointer"
                    fontSize={20}
                    onClick={() => {
                      dispatch(resetPrivacyData(""));
                    }}
                  />
                </div>
                <div className="flex items-center">
                  <IoMdSearch
                    className="absolute ms-2 text-lightgray"
                    fontSize={24}
                  />
                  <input
                    type="text"
                    placeholder={t("name")}
                    className=" regular-text border h-[56px] my-5 w-full rounded-xl ps-10 shadow-inner outline-none placeholder:text-lightgray text-black"
                  />
                </div>
                <h4 className="base-text text-end underline mb-5">
                  {t("uncheck")}
                </h4>

                <div className="space-y-3">
                  {classes?.map((item, key) => (
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
                      <Switch
                        checked={enabled}
                        // onChange={setEnabled}
                        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-lightgray p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-darkblue"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                        />
                      </Switch>
                    </div>
                  ))}
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
