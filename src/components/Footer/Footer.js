import React from "react";
import store from "../../redux/store";

function Footer() {
  return(
    <footer className="filter--task">
      <button className="mr-4" onClick={(e) => store.dispatch({type: "CHANGE_VISIBILITY", status: e.target.textContent})}>Active</button>
      <button onClick={(e) => store.dispatch({type: "CHANGE_VISIBILITY", status: e.target.textContent})}>Completed</button>
    </footer>
  )
}

export default Footer