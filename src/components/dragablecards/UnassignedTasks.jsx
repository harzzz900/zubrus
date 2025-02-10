import { useDrop } from "react-dnd";
import Task from "./Task";

export default function UnassignedTasks({
  tasks,
  moveTask,
  enabled,
  setEnabled,
}) {
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
          enabled={enabled}
          setEnabled={setEnabled}
        />
      ))}
    </div>
  );
}
