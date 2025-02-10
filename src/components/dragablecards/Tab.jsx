import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDrop } from "react-dnd";
import { FaEquals } from "react-icons/fa";
import { RiArrowDropDownLine, RiPencilFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setCoursePrivacydata } from "../../redux/slices/coursePrivacySlice";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineNavigateNext, MdOutlineRemoveRedEye } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Task from "./Task";
import { BsEyeSlash } from "react-icons/bs";

export default function Tab({
  tab,
  tasks,
  moveTask,
  enabled,
  setEnabled,
  isInput,
  setIsInput,
}) {
  const dispatch = useDispatch();
  const [{ isOver }, dropRef] = useDrop({
    accept: "TASK",
    drop: (item) => {
      if (item.currentTab !== tab) {
        moveTask(item.currentTab, tab, item.index);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={dropRef}
      className="tab my-5 bg-white p-5 rounded-3xl"
      style={{
        backgroundColor: isOver ? "#e0ffe0" : "#fff",
      }}
    >
      {/* <h3>{tab}1</h3> */}
      <div className="text-base font-semibold flex justify-between items-center flex-wrap">
        <h2 className="text-lg font-bold flex items-center gap-3">
          {enabled && <FaEquals />}{" "}
          {isInput ? (
            <input
              type="text"
              value={tab}
              className="border rounded-lg ps-2 bg-transparent font-bold text-lg outline-none"
            />
          ) : (
            tab
          )}{" "}
          {enabled && (
            <RiPencilFill
              className="cursor-pointer"
              onClick={() => setIsInput(!isInput)}
            />
          )}
        </h2>
        <h3 className="text-lightgray flex items-center gap-3">
          {enabled ? (
            <div className="flex items-center gap-3">
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold   focus:outline-none data-[open]:rounded-full  data-[open]:bg-[#F2F3FF] data-[open]:text-black data-[focus]:outline-1 ">
                  <span className="regular-text">Mato visi</span>
                  <RiArrowDropDownLine fontSize={20} />
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-52 origin-top-right rounded-xl border border-white/5 bg-white shadow-md p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[hover]:bg-lightgray data-[closed]:opacity-0"
                >
                  <MenuItem>
                    <button
                      onClick={() => {
                        dispatch(setCoursePrivacydata("matovisi"));
                      }}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                    >
                      <MdOutlineRemoveRedEye fontSize={20} />
                      Mato visi
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={() => {
                        dispatch(setCoursePrivacydata("Nematoniekas"));
                      }}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                    >
                      <BsEyeSlash fontSize={20} />
                      Nemato niekas
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={() => {}}
                      className="group flex justify-between w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                    >
                      <div className="flex items-center gap-2">
                        <PiDotsThreeOutlineVerticalFill
                          fontSize={20}
                          className="text-lightgray"
                        />
                        Pasirinktinai
                      </div>
                      <div>
                        <MdOutlineNavigateNext
                          fontSize={20}
                          className="text-lightgray"
                        />
                      </div>
                    </button>
                  </MenuItem>
                  <div className="my-1 h-px bg-white/5" />
                </MenuItems>
              </Menu>
              <RxCross2 color="black" />
            </div>
          ) : (
            " Mato visi"
          )}
        </h3>
      </div>
      {tasks.map((task, index) => (
        <Task
          key={task.id} // Use `id` as key
          task={task}
          index={index}
          moveTask={moveTask}
          currentTab={tab}
          enabled={enabled}
          setEnabled={setEnabled}
        />
      ))}
    </div>
  );
}
