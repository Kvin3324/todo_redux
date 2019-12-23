import React from "react";

function Footer() {
  return(
    <React.Fragment>
      <div className="filter--task">
        <a className="mr-4" style={{cursor: "pointer"}}>All</a>
        <a className="mr-4" style={{cursor: "pointer"}}>Active</a>
        <a style={{cursor: "pointer"}}>Completed</a>
      </div>
    </React.Fragment>
  )
}

export default Footer