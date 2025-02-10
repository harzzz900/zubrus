import { createSlice } from "@reduxjs/toolkit";

// Initial state for tasks and tabs
const initialState = {
  tasks: {
    Unassigned: [],
    Pending: [],
    Working: [],
    Completed: [],
  },
  tabs: ["Pending", "Working", "Completed"],
  taskInput: "",
  newTabInput: "",
  newTaskImage: "",
  newTaskCount: "",
};

const subjectSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { taskText, taskImage, taskCount } = action.payload;
      const newTask = {
        id: Date.now(),
        img: taskImage,
        text: taskText,
        questioncount: parseInt(taskCount, 10),
      };

      state.tasks.Unassigned.push(newTask); // Adding task to Unassigned by default
      state.taskInput = "";
      state.newTaskImage = "";
      state.newTaskCount = "";
    },
    addNewTab: (state, action) => {
      const newTabName = action.payload || "test"; // Use the actual input value
      state.tabs.push(newTabName);
      state.tasks[newTabName] = []; // Initialize an empty array for new tab
    },
    moveTask: (state, action) => {
      const { sourceTab, destinationTab, taskIndex } = action.payload;
      const taskToMove = state.tasks[sourceTab][taskIndex];

      // Remove task from the source tab
      state.tasks[sourceTab] = state.tasks[sourceTab].filter(
        (task, index) => index !== taskIndex
      );

      // Add task to the destination tab
      state.tasks[destinationTab].push(taskToMove);
    },
    setTaskInput: (state, action) => {
      state.taskInput = action.payload;
    },
    setNewTabInput: (state, action) => {
      state.newTabInput = action.payload;
    },
    setNewTaskImage: (state, action) => {
      state.newTaskImage = action.payload;
    },
    setNewTaskCount: (state, action) => {
      state.newTaskCount = action.payload;
    },
  },
});

export const {
  addTask,
  addNewTab,
  moveTask,
  setTaskInput,
  setNewTabInput,
  setNewTaskImage,
  setNewTaskCount,
} = subjectSlice.actions;

export default subjectSlice.reducer;
