import React, { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setBannerData } from "../../redux/slices/bannerSlice";

export default function Landingmodel() {
  const bannerstate = useSelector((state) => state.bannerData.visible);
  let [isOpen, setIsOpen] = useState(bannerstate);
  const dispatch = useDispatch();
  return (
    <div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(true)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/35 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full relative max-w-md rounded-3xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <IoMdClose
                className="absolute right-5 top-5 cursor-pointer"
                fontSize={20}
                onClick={() => {
                  setIsOpen(false);
                  dispatch(setBannerData(false));
                }}
              />
              <img
                src="/assets/images/adposter.png"
                alt="poster"
                className="bg-orange-400 w-full rounded-t-3xl "
                srcset=""
              />
              <div className="p-6 -mt-14 bg-white relative z-10  rounded-b-3xl">
                <div className="heroSlider ">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop
                  >
                    {[...Array(4)]?.map((item, index) => (
                      <SwiperSlide>
                        <div key={index}>
                          <DialogTitle
                            as="h3"
                            className="text-xl font-semibold text-center text-black"
                          >
                            Sukurkite savo klasę
                          </DialogTitle>
                          <p className="my-4 pb-6 regular-text text-center ">
                            Labai paprastai sukurkite klasę savo mokiniams,
                            kurioje sudėsite mokymosi medžiagą, sukviesite
                            kolegas ir mokinius.
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="mt-4">
                  <Button
                    className="primary-btn w-full medium-text"
                    onClick={() => {
                      setIsOpen(false);
                      dispatch(setBannerData(false));
                    }}
                  >
                    Toliau
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
