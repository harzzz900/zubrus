import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { IoMdCheckmark } from "react-icons/io";

export default function PopularityFIlter({
  filter,
  setFilter,
  handleFilterClick,
}) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex items-center gap-3">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold   focus:outline-none data-[open]:rounded-full  data-[open]:bg-[#F2F3FF] data-[open]:text-darkblue data-[focus]:outline-1 ">
            <span className="regular-text">
              {filter?.filter((v) => v?.isActive === true)[0]?.title}
            </span>
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-60 origin-top-right rounded-xl border border-white/5 bg-white shadow-md p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[hover]:bg-lightgray data-[closed]:opacity-0"
          >
            {filter?.map((item, index) => (
              <MenuItem key={index}>
                <button
                  onClick={() => handleFilterClick(index)}
                  className={`${
                    item.isActive && "bg-[#F0F1FF] text-darkblue"
                  } group flex justify-between w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]`}
                >
                  {t(item.title)}
                  {item.isActive && <IoMdCheckmark className="text-darkblue" />}
                </button>
              </MenuItem>
            ))}
            <div className="my-1 h-px bg-white/5" />
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
