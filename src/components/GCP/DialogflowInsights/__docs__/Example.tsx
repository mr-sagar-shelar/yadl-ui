import React, { FC } from "react";
  import DialogflowInsights from "../DialogflowInsights";
  
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
        <DialogflowInsights width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  