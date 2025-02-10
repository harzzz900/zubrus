import { Dialog, DialogPanel } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import FeedbackModel from "./FeedbackModel";
import { useTranslation } from "react-i18next";

export default function SubjectOverview({ setIsDetail, isDetail }) {
  const { t } = useTranslation();
  const [isFeedback, setIsFeddback] = useState(false);
  return (
    <div>
      <Dialog
        open={isDetail}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setIsDetail(true);
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-3xl rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="p-6  bg-white relative z-10  rounded-3xl">
                <div className="flex justify-between items-center text-xl font-semibold">
                  <h2 className="mb-5">{t("question")}</h2>
                  <IoMdClose
                    className="absolute right-5 top-5 cursor-pointer"
                    fontSize={20}
                    onClick={() => {
                      setIsDetail(false);
                    }}
                  />
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-2 md:!grid-cols-1 h-80 xl:h-auto border rounded-xl shadow-md">
                  <div className="p-5 border-r">
                    <h3 className="text-lightgray base-text">
                      {t("question")}
                    </h3>
                    <h4 className="base-text my-2">Pirmasis niutono dėsnis</h4>
                    <img
                      src="/assets/images/image.png"
                      alt="quizcard"
                      srcset=""
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="p-5 border-r">
                    <h3 className="text-lightgray base-text">{t("answer")}</h3>
                    <p className="base-text my-2">
                      Egzistuoja tokios atskaitos sistemos, kuriose kūnas yra
                      rimties būsenos arba juda tolygiai ir tiesiaeigiškai, jei
                      jį veikiančių jėgų dedamoji lygi nuliui.
                    </p>
                  </div>
                  <div className="p-5 ">
                    <h3 className="text-lightgray base-text">
                      {t("Prompter")}
                    </h3>
                    <h4 className="base-text my-2">Susijęs su =0</h4>
                  </div>
                </div>
                <h4
                  className="base-text mt-3 underline cursor-pointer"
                  onClick={() => setIsFeddback(true)}
                >
                  {t("feedback")}
                </h4>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <FeedbackModel
        isFeedback={isFeedback}
        setIsFeddback={setIsFeddback}
        isDetail={isDetail}
        setIsDetail={setIsDetail}
      />
    </div>
  );
}
