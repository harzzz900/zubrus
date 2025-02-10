import { FiPlus } from "react-icons/fi";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RiArrowDropDownLine, RiPencilFill } from "react-icons/ri";
import { FaEquals } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa6";
import { TbCardsFilled } from "react-icons/tb";
import CreateSubjectmodel from "../model/CreateSubjectmodel";
import WhoSee from "../model/WhoSee";
import WhocannotSee from "../model/WhocannotSee";
import { RxCross2 } from "react-icons/rx";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { BsEyeSlash } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineNavigateNext, MdOutlineRemoveRedEye } from "react-icons/md";
import update from "immutability-helper";
import { useDispatch } from "react-redux";
import { setCoursePrivacydata } from "../../redux/slices/coursePrivacySlice.jsx";
import { useTranslation } from "react-i18next";

export default function Material() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [enabled, setEnabled] = useState(false);
  const [click, setClick] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isCreatemodel, setIsCreatemodel] = useState(false);
  const initialTabs = ["Fizika"];
  // const initialTabs = ["Fizika", "Working", "Completed"];
  const [tabs, setTabs] = useState(initialTabs);
  const [tasks, setTasks] = useState({
    Unassigned: [
      {
        id: Date.now(), // Unique ID
        img: "/assets/images/History.png",
        text: "Šiluminiai reiškiniai",
        questioncount: 30,
      },
    ], // New tasks go here first
    Fizika: [],
    // Working: [],
    // Completed: [],
  });
  console.log("tasks", tasks);
  const [taskInput, setTaskInput] = useState("");
  const [newTabInput, setNewTabInput] = useState("");
  const [newTaskImage, setNewTaskImage] = useState("");
  const [newTaskCount, setNewTaskCount] = useState("");

  const Task = ({ task, index, moveTask, currentTab }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "TASK",
      item: { index, currentTab },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, dropRef] = useDrop({
      accept: "TASK",
      hover: (draggedItem) => {
        if (
          draggedItem.index !== index ||
          draggedItem.currentTab !== currentTab
        ) {
          moveTask(
            draggedItem.currentTab,
            currentTab,
            draggedItem.index,
            index
          );
          draggedItem.index = index; // Update the current index to reflect the new position
          draggedItem.currentTab = currentTab; // Update the current tab if it has changed
        }
      },
    });

    return (
      <div
        ref={(node) => dragRef(dropRef(node))}
        className="task  relative flex sm:flex-col items-center gap-5 my-5 first:mt-0 last:mb-0"
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div className="flex items-center justify-between md:justify-center gap-5 bg-white w-full">
          <div className="flex sm:flex-col items-center gap-5 w-full">
            {enabled && <FaEquals className="lg:absolute lg:left-3 lg:top-3" />}
            <img src={task.img} alt={task.text} />
            <div>
              <h2 className="text-lg font-bold md:text-center">{task.text}</h2>
              <div className="flex items-center md:items-start sm:justify-between gap-5 underline regular-text mt-2">
                <h3>Klausimai (35)</h3>
                <h3>Statistika</h3>
                <h3>Apie kaladę</h3>
              </div>
            </div>
          </div>
          {enabled && (
            <RxCross2
              color="black"
              className="lg:absolute lg:right-3 lg:top-3"
            />
          )}
        </div>
      </div>
    );
  };

  const Tab = ({ tab, tasks, moveTask }) => {
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
                    <span className="regular-text">{t("allsee")}</span>
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
                        {t("allsee")}
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
                        {t("nosee")}
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
                          {t("Optional")}
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
              `${t("allsee")}`
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
          />
        ))}
      </div>
    );
  };
  const moveTask = (sourceTab, destinationTab, taskIndex, destinationIndex) => {
    const taskToMove = tasks[sourceTab][taskIndex];

    setTasks((prevTasks) => {
      // Remove task from source
      const updatedSourceTasks = update(prevTasks[sourceTab], {
        $splice: [[taskIndex, 1]],
      });

      // Reorder tasks within the same tab
      if (sourceTab === destinationTab) {
        const reorderedTasks = update(updatedSourceTasks, {
          $splice: [[destinationIndex, 0, taskToMove]],
        });

        return {
          ...prevTasks,
          [sourceTab]: reorderedTasks,
        };
      }

      // Move task to different tab
      const updatedDestinationTasks = update(prevTasks[destinationTab], {
        $splice: [[destinationIndex, 0, taskToMove]],
      });

      return {
        ...prevTasks,
        [sourceTab]: updatedSourceTasks,
        [destinationTab]: updatedDestinationTasks,
      };
    });
  };

  const addTask = () => {
    const defaultTask = "Judėjimas ir jėgos fizika";
    const defaultImage = "/assets/images/Geography.png";
    const defaultCount = "67";
    const taskText = taskInput.trim() || defaultTask;
    const taskImage = newTaskImage.trim() || defaultImage;
    const taskCount = newTaskCount.trim() || defaultCount;

    const newTask = {
      id: Date.now(), // Unique ID
      img: taskImage,
      text: taskText,
      questioncount: parseInt(taskCount, 10),
    };

    setTasks((prevTasks) => ({
      ...prevTasks,
      Unassigned: [...prevTasks.Unassigned, newTask], // Add task to Unassigned
    }));
    setTaskInput(""); // Reset input fields
    setNewTaskImage("");
    setNewTaskCount("");
  };

  // Unassigned Tasks Component (like the Tab component)
  const UnassignedTasks = ({ tasks, moveTask }) => {
    const [{ isOver }, dropRef] = useDrop({
      accept: "TASK",
      drop: (item) => {
        if (item.currentTab !== "Unassigned") {
          moveTask(item.currentTab, "Unassigned", item.index);
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    });

    return (
      <div
        ref={dropRef}
        className="unassigned-tasks my-5 p-5 rounded-3xl"
        style={{
          backgroundColor: isOver ? "#e0ffe0" : "#fff",
          marginBottom: "20px",
        }}
      >
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            index={index}
            moveTask={moveTask}
            currentTab="Unassigned"
          />
        ))}
      </div>
    );
  };
  const addNewTab = () => {
    const newTabName = newTabInput.trim() || "Test" + tabs.length;
    setTabs([...tabs, newTabName]);
    setTasks((prevTasks) => ({
      ...prevTasks,
      [newTabName]: [], // Create an empty array for the new tab
    }));
    setNewTabInput("");
  };
  return (
    <div className="flex lg:flex-col justify-center items-start gap-10 min-h-screen lg:">
      <div className="max-w-5xl w-[880px] lg:w-full">
        <div
          className={`bg-white p-5 ${
            enabled ? "rounded-t-3xl" : "rounded-3xl"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-lightgray p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-darkblue"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                />
              </Switch>
              <span className="regular-text">{t("edit")}</span>
            </div>

            <div className="flex items-center gap-3">
              <Menu>
                <MenuButton
                  onClick={() => setClick(!click)}
                  className="inline-flex items-center gap-2 rounded-md  py-1.5 text-sm/6 font-semibold   focus:outline-none data-[open]:rounded-full  data-[focus]:outline-1 "
                >
                  <span className="regular-text">{t("add")}</span>
                  <FiPlus
                    fontSize={20}
                    className={`${
                      click && "bg-darkblue text-white"
                    } border rounded-full size-8 p-1 flex justify-center items-center`}
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
                        setClick(false);
                        setIsCreatemodel(true);
                      }}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                    >
                      <TbCardsFilled className="size-5 " />
                      {t("castle")}
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={() => {
                        setClick(false);
                        addNewTab();
                      }}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                    >
                      <FaFolder className="size-4 " />
                      {t("folder")}
                    </button>
                  </MenuItem>
                  <div className="my-1 h-px bg-white/5" />
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
        {enabled && (
          <div className="bg-darkblue rounded-b-3xl text-white px-5 py-1.5 text-sm font-normal">
            <span className="font-semibold"> {t("editmode")}</span> -{" "}
            {t("adjust")}
          </div>
        )}

        {/* <DndProvider backend={HTML5Backend}>
          <div className="w-full bg-white rounded-3xl p-5 my-5 lg:mt-10 ">
            <Container
              enabled={enabled}
              setEnabled={setEnabled}
              title="Fizika"
            />
          </div>
        </DndProvider>*/}

        <DndProvider backend={HTML5Backend}>
          <div className="app">
            {tasks?.Unassigned?.length ? (
              <UnassignedTasks
                tasks={tasks.Unassigned}
                moveTask={moveTask}
                enabled={enabled}
                setEnabled={setEnabled}
              />
            ) : null}

            {/* Task Tabs with DnD */}

            <div className="tabs flex flex-col" style={{ display: "flex" }}>
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  tab={tab}
                  tasks={tasks[tab]}
                  moveTask={moveTask}
                  enabled={enabled}
                  setEnabled={setEnabled}
                  isInput={isInput}
                  setIsInput={setIsInput}
                />
              ))}
            </div>
          </div>
        </DndProvider>
      </div>

      <div className="md:w-full bg-white rounded-3xl p-5 relative w-[316px] lg:w-full">
        <img
          src="/assets/images/Helper.png"
          alt="helper"
          className="absolute -top-5 right-0"
        />
        <h2 className="text-lg font-bold">{t("whatmaterial")}</h2>

        <div className="flex items-center justify-between mt-5">
          <div>
            <h4 className="regular-text ">
              {t("question")} {t("deck")}
            </h4>
            <p className="base-text text-lightgray">{t("mqa2")}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div>
            <h4 className="regular-text ">{t("folder")} </h4>
            <p className="base-text text-lightgray">{t("mqa3")}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div>
            <h4 className="regular-text ">{t("mq4")}</h4>
            <p className="base-text text-lightgray">{t("mqa4")}</p>
          </div>
        </div>
        <h6 className="underline mt-5 regular-text ">{t("hide")}</h6>
      </div>
      <CreateSubjectmodel
        isCreatemodel={isCreatemodel}
        setIsCreatemodel={setIsCreatemodel}
        addTask={addTask}
      />
      <WhoSee />
      <WhocannotSee />
    </div>
  );
}
