import { useDrag, useDrop } from "react-dnd";
import { FaEquals } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Task({
  task,
  index,
  moveTask,
  currentTab,
  enabled,
  setEnabled,
}) {
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
        moveTask(draggedItem.currentTab, currentTab, draggedItem.index, index);
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
              <h3>Klausimai 35</h3>
              <h3>Statistika</h3>
              <h3>Apie kaladę</h3>
            </div>
          </div>
        </div>
        {enabled && (
          <RxCross2 color="black" className="lg:absolute lg:right-3 lg:top-3" />
        )}
      </div>
    </div>
  );
}
