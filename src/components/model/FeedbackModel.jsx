import { Dialog, DialogPanel } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function FeedbackModel({ isFeedback, setIsFeddback }) {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog
        open={isFeedback}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setIsFeddback(true);
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm">
            <DialogPanel
              transition
              className="w-full relative max-w-md rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <IoMdClose
                className="absolute right-5 top-5 cursor-pointer"
                fontSize={20}
                onClick={() => {
                  setIsFeddback(false);
                }}
              />

              <div className="flex flex-col gap-10 p-5 ">
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => {
                      setIsFeddback(false);
                    }}
                    className="border cursor-pointer rounded-full flex justify-center items-center size-10"
                  >
                    <FaLongArrowAltLeft />
                  </div>
                  <h3 className="text-xl font-bold">{t("feedback")}</h3>
                </div>
                <textarea
                  name={t("feedback").split(" ")[0]}
                  id={t("feedback").split(" ")[0]}
                  className="border rounded-xl shadow-md p-3 outline-none"
                  rows={5}
                  placeholder={t("feedback").split(" ")[0]}
                ></textarea>
                <button
                  className="primary-btn w-full"
                  onClick={() => {
                    setIsFeddback(false);
                  }}
                >
                  {t("Send")}
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
