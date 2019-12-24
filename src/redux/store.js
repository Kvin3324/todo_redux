import {createStore} from "redux";

const tasks = {
  visibility: "Active",
  tasks: []
};

function allTasks(state = tasks, action) {
  const newState = {...state};

  if (action.type === "ADD_TASK") {
    newState.tasks.push({
      task: action.task.current.value,
      status: "Active"
    });
    return newState;
  }

  if (action.type === "TASK_COMPLETED") {
    newState.tasks[action.taskIndex].status = "Completed";
    return newState;
  }

  if (action.type === "CHANGE_VISIBILITY") {
    newState.visibility = action.status;
    return newState;
  }

  return state;
}

export default createStore(allTasks)