import {createStore} from "redux";

let tasks = [];

function allTasks(state = tasks, action) {
  if (action.type === "ADD_TASK") {
    const newState = [...state];
    const task = {
      task: action.task.current.value,
      status: "active"
    }
    newState.push(task);
    return newState;
  }
  return state;
}

export default createStore(allTasks)