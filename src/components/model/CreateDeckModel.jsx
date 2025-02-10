import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

export default function CreateDeckModel({ open, setOpen }) {
  return (
    <div>
      <Dialog
        open={open}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setOpen(true);
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm">
            <DialogPanel
              transition
              className="w-full relative max-w-lg rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <IoMdClose
                className="absolute right-5 top-5 cursor-pointer"
                fontSize={20}
                onClick={() => {
                  setOpen(false);
                }}
              />

              <div className="flex flex-col gap-10 p-5 ">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">Atsiliepimas kūrėjui</h3>
                </div>

                <div className="flex xs:flex-col items-center justify-between gap-3 ">
                  <div className="bg-bluelight w-full rounded-2xl flex flex-col text-center items-center justify-center h-72 xs:p-1">
                    <img src="/assets/images/Deck.png" alt="Deck" />
                    <div>
                      <h2 className="regular-text">Įprasta kaladė</h2>
                      <h3 className="base-text text-lightgray">
                        Sukurkite klausimus pats.
                      </h3>
                    </div>
                  </div>
                  <div className="bg-[#FFEEE2] w-full rounded-2xl flex flex-col text-center items-center justify-center h-72  xs:p-1">
                    <img src="/assets/images/Deck (1).png" alt="Deck" />
                    <div>
                      <h2 className="regular-text">
                        <span className="text-orange-500 text-base font-bold">
                          Automatinė DI
                        </span>{" "}
                        kaladė
                      </h2>
                      <p className="base-text text-lightgray">
                        Įkelkite medžiagos failą PDF ir sistema klausimus sukurs
                        automatiškai.
                      </p>
                    </div>
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
