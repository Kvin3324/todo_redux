import React, { useState } from "react";
import store from "../../redux/store";

function RenderTask() {
  const [data, setData] = useState(store.getState());
  store.subscribe(() => setData(store.getState()));

  if (data.tasks.length === 0) return null;

  if (data.tasks.length !== 0) {
    return data.tasks.map((task, index) => {
      if (task.status === data.visibility ) {
        return (
          <div className={`task ${task.status === "Completed" ? "task--completed" : ""}`} key={index}>
            <input type="checkbox" className="mr-3 mt-2" onClick={() => store.dispatch({ type: "TASK_COMPLETED", taskIndex: index })} />
            <p>{task.task}</p>
          </div>
        )
      }
    })
  }
}

export default RenderTask