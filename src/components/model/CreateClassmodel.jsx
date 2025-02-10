import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { classes } from "../../helper/constant";
import { useTranslation } from "react-i18next";

export default function CreateClassmodel({ open, setOpen }) {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog
        open={open}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setOpen(true)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-md rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="p-6 -mt-14 bg-white relative z-10  rounded-3xl">
                <div className="flex justify-between items-center text-xl font-semibold">
                  <h2> {t("createclass")}</h2>
                  <IoMdClose
                    className="absolute right-5 top-5 cursor-pointer"
                    fontSize={20}
                    onClick={() => {
                      setOpen(false);
                    }}
                  />
                </div>
                <input
                  type="text"
                  placeholder={t("name")}
                  className=" regular-text border h-[56px] my-5 w-full rounded-xl ps-5 shadow-inner outline-none placeholder:text-lightgray text-black"
                />
                <span className="regular-text">{t("picture")}</span>

                <div className="grid grid-cols-6 lg:grid-cols-4 gap-2 mt-2">
                  {classes?.map((item) => (
                    <div
                      style={{ backgroundColor: item?.backgroundcolor }}
                      className="rounded-xl flex items-center justify-center p-2"
                    >
                      <img
                        src={item?.thumbnail}
                        alt={item?.name}
                        className="w-[47px] h-[45px] object-contain object-center"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Button
                    className="primary-btn w-full medium-text"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {t("createclass")}
                  </Button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
