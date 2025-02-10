import React, { useState } from "react";
import { subjects } from "../../helper/constant";
import { RiPencilFill } from "react-icons/ri";
import { FaEquals } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FiPlus } from "react-icons/fi";

export default function MaterialCard({ title, enabled, setEnabled }) {
  const [select, setSelect] = useState("");
  return (
    <div>
      <div className="text-base font-semibold flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold flex items-center gap-3">
          {enabled && <FaEquals />} {title} {enabled && <RiPencilFill />}
        </h2>
        <h3 className="text-lightgray flex items-center gap-3">Mato visi</h3>
        {enabled && (
          <div className="flex items-center gap-3">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold   focus:outline-none data-[open]:rounded-full  data-[open]:bg-[#F2F3FF] data-[focus]:outline-1 ">
                <span className="regular-text">Mato visi</span>
                <FiPlus
                  fontSize={20}
                  className={`border rounded-full size-8 p-1 flex justify-center items-center`}
                />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-white shadow-md p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[hover]:bg-lightgray data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button
                    onClick={() => {
                      setSelect("matovisi");
                    }}
                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                  >
                    Mato visi
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={() => {
                      setSelect("Nematoniekas");
                    }}
                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                  >
                    Nemato niekas
                  </button>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
              </MenuItems>
            </Menu>
            <RxCross2 color="black" />
          </div>
        )}
      </div>

      <div className="space-y-5">
        {subjects?.slice(0, 4).map(({ img, title, questioncount }) => (
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              {enabled && <FaEquals />}
              <img src={img} alt={title} />
              <div>
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="flex items-center gap-5 underline regular-text mt-2">
                  <h3>Klausimai {questioncount}</h3>
                  <h3>Statistika</h3>
                  <h3>Apie kaladę</h3>
                </div>
              </div>
            </div>
            {enabled && <RxCross2 color="black" className="" />}
          </div>
        ))}
      </div>
    </div>
  );
}
