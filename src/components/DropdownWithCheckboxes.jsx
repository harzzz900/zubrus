import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";

const DropdownWithCheckboxes = () => {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <div className="flex items-center gap-3">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold   focus:outline-none data-[open]:rounded-full  data-[open]:bg-[#F2F3FF] data-[open]:text-darkblue data-[focus]:outline-1 ">
            <span className="regular-text"> {t("Alldisciplines")}</span>
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-60 origin-top-right !left-10 rounded-xl border border-white/5 bg-white shadow-md p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[hover]:bg-lightgray data-[closed]:opacity-0 px-3"
          >
            <div className="relative flex items-center h-12">
              <IoIosSearch className="absolute " fontSize={24} />
              <input
                type="text"
                className="w-full ps-7 border-b outline-none"
                placeholder="Ieškoti "
              />
            </div>
            {/* {filter?.map((item, index) => ( */}
            <span className="text-darkblue base-text ">Atžymėti viską</span>
            {/* <MenuItem> */}
            <button
              className={` group flex flex-col justify-between w-full items-start gap-2 rounded-lg py-1.5 data-[focus]:bg-[#F7F7F7]`}
            >
              {[...Array(5)].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 base-text mt-0"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="appearance-none text-white text-lg flex items-center w-5 h-5 border shadow-inner rounded-lg checked:bg-darkblue checked:border-none checked:ring-0 checked:after:block checked:after:h-7 checked:after:ms-1 checked:after:w-0 checked:after:content-['✓'] checked:after:bg-white"
                    />
                    <span className="regular-text">Astronomija</span>
                  </label>
                </div>
              ))}
            </button>
            {/* </MenuItem> */}
            {/* ))} */}
            <div className="my-1 h-px bg-white/5" />
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default DropdownWithCheckboxes;
