import React, {useState, useRef} from "react";
import store from "../../redux/store";

function RenderTask() {
  const taskCheck = useRef(null);
  const [data, setData] = useState(store.getState());
  store.subscribe(() => setData(store.getState()));

  function completedTask(e) {
    e.target.parentNode.classList.add("task--completed");
  }

  console.log(data);
  return(
    <React.Fragment>
      {
        function () {
          return data.map((task, index) => {
            return(
              <div className="task" key={index} ref={taskCheck}>
                <input type="checkbox" className="mr-3 mt-2" onClick={(e) => completedTask(e) } />
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