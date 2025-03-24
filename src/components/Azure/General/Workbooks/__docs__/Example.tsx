import React, { FC } from "react";
  import Workbooks from "../Workbooks";
  
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
        <Workbooks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  