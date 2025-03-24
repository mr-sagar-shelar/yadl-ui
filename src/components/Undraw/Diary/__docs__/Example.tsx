import React, { FC } from "react";
  import Diary from "../Diary";
  
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
        <Diary width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  