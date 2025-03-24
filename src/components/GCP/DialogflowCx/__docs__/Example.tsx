import React, { FC } from "react";
  import DialogflowCx from "../DialogflowCx";
  
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
        <DialogflowCx width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  