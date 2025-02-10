import { Dialog, DialogPanel } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

export default function StatisticModel({ isStatistic, setisStatistic }) {
  return (
    <div>
      <Dialog
        open={isStatistic}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setisStatistic(false);
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-md rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className=" bg-[#FFFAEB] relative z-10  rounded-t-3xl p-5">
                <IoMdClose
                  className="absolute right-5 top-5 cursor-pointer"
                  fontSize={20}
                  onClick={() => {
                    setisStatistic(false);
                  }}
                />
                <div className="flex items-center justify-start gap-3">
                  <img
                    src={`/assets/images/people2.png`}
                    className="size-20 rounded-full object-cover"
                    alt="Avatar"
                  />
                  <div>
                    <h2 className="text-lg font-bold">Roma Vaišienė</h2>
                    <div className="text-sm font-medium text-mediumgray flex gap-2 items-center my-2">
                      <h6 className="text-center"> Fizika</h6>
                      <GoDotFill fontSize={14} className="text-[10px]" />
                      <h6 className="text-center"> Zubrus</h6>
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 py-7 items-center">
                  <div>
                    <h3 className="regular-text">Viso aktyvumas</h3>
                    <h4 className="text-xl font-semibold">19:12</h4>
                  </div>
                  <div>
                    <h3 className="regular-text">Viso aktyvumas</h3>
                    <h4 className="text-xl font-semibold">73%</h4>
                  </div>
                </div>
              </div>

              <div className=" p-5">
                <div className="flex text-sm items-center gap-3 border rounded-xl w-fit px-2 py-2">
                  {["Aktyvumas", "Rezultatyvumas"]?.map((item, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer ${
                        item === "Aktyvumas" &&
                        "bg-darkblue text-white rounded-lg px-2 py-1"
                      } px-3`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {[...Array(6)].map((item, index) => (
                  <div
                    key={index}
                    className="flex regular-text mt-3 justify-between items-center"
                  >
                    <h4>Šiluminiai reiškiniai</h4>
                    <h5>12 val.</h5>
                  </div>
                ))}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
