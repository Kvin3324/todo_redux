import React, {useState, useRef} from "react";
import store from "../../redux/store";

function RenderTask() {
  const taskCheck = useRef(null);
  const [data, setData] = useState(store.getState());
  store.subscribe(() => setData(store.getState()));

  console.log(data);

  function completedTask() {
    taskCheck.current.classList.add("task--completed");
  }

  return(
    <React.Fragment>
      {
        function () {
          return data.map((task, index) => {
            return(
              <div className="task" key={index} ref={taskCheck}>
                <input type="checkbox" className="mr-3 mt-2" onClick={() => completedTask() } />
                <p>{task.task}</p>
              </div>
              )
            })
        }()
      }
    </React.Fragment>
  )
}

export default RenderTask