import { Dialog, DialogPanel } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";

export default function DeleteModel({ isDelete, setIsDelete }) {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog
        open={isDelete}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setIsDelete(true);
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm">
            <DialogPanel
              transition
              className="w-full relative max-w-sm rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <IoMdClose
                className="absolute right-5 top-5 cursor-pointer"
                fontSize={20}
                onClick={() => {
                  setIsDelete(false);
                }}
              />

              <div className="flex gap-10 p-5 items-center">
                <div>
                  <h3 className="text-xl font-bold">
                    {t("remove")} Rytis Bulėnas {t("fromclass")}
                  </h3>
                  <h4 className="regular-text">{t("dltmsg")}</h4>
                </div>
              </div>
              <div className="flex justify-between px-5 pb-5 gap-5 items-center medium-text">
                <button
                  className="secondary-btn w-full"
                  onClick={() => {
                    setIsDelete(false);
                  }}
                >
                  {t("cancel")}
                </button>
                <button
                  className="primary-btn w-full"
                  onClick={() => {
                    setIsDelete(false);
                  }}
                >
                  {t("remove")}
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
