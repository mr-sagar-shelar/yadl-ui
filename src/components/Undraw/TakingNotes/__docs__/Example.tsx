import React, { FC } from "react";
  import TakingNotes from "../TakingNotes";
  
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
        <TakingNotes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  