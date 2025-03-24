import React, { FC } from "react";
  import Reminders from "../Reminders";
  
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
        <Reminders width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  