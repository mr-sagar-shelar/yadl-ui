import React, { FC } from "react";
  import Calendar from "../Calendar";
  
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
        <Calendar width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  