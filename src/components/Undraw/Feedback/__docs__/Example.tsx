import React, { FC } from "react";
  import Feedback from "../Feedback";
  
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
        <Feedback width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  