import React from "react";

function Footer() {
  return(
    <React.Fragment>
      <div className="filter--task">
        <button className="mr-4">All</button>
        <button className="mr-4">Active</button>
        <button>Completed</button>
      </div>
    </React.Fragment>
  )
}

export default Footer