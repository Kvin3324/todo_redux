import React, {useState, useRef} from "react";
import store from "../../redux/store";
import RenderTask from "../../components/Task/RenderTask";

function TodoList() {
  const taskInput = useRef(null);
  const [data, setData] = useState(store.getState())

  store.subscribe(() => setData(store.getState()));

  return(
    <React.Fragment>
      <div className="todo--input">
        <input type="text" placeholder="what needs to be, done ?" ref={taskInput}></input>
        <button className="btn btn-primary ml-3" onClick={() => store.dispatch({type: "ADD_TASK", task: taskInput})}>Add your task</button>
      </div>
      {
        function () {
          if (data.length === 0) return null;

          if (data.length !== 0) {
            return <RenderTask />
          }
        }()
      }
    </React.Fragment>
  )
}

export default TodoList