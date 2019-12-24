import React, {useState} from "react";
import store from "../../redux/store";

function RenderTask() {
  // const [data, setData] = useState(store.getState());
  const [data, setData] = useState({
    tasks: store.getState()
  });
  store.subscribe(() => setData(store.getState()));


  function completedTask(e, index) {
    e.target.parentNode.classList.add("task--completed");
    console.log(e.target);
    console.log(e.index);
    
    console.log(e.target.id);

    const newState = [...data];
    console.log(newState);

    newState.map((task, index) => {
      task.status = "completed";
    })
    setData(newState)
    

    // data.map((task, index) => {
    //   console.log(data.indexOf(task));
    //   console.log(task);
    // })
  }

  console.log(data);
  return(
    <React.Fragment>
      {
        function () {
          if(data.tasks.length === 0) return null;

          if (data.tasks.length !== 0) {
            return data.tasks.map((task, index) => {
              return(
                <div className="task" key={index}>
                  <input type="checkbox" className="mr-3 mt-2" onClick={(e, index) => completedTask(e, index) } />
                  <p>{task.task}</p>
                </div>
                )
              })
          }

        }()
      }
    </React.Fragment>
  )
}

export default RenderTask