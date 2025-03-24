import React, { FC } from "react";
  import ToDoList from "../ToDoList";
  
  const Example = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ToDoList width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  