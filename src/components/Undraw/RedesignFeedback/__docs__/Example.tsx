import React, { FC } from "react";
  import RedesignFeedback from "../RedesignFeedback";
  
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
        <RedesignFeedback width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  