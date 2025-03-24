import React, { FC } from "react";
  import Notes from "../Notes";
  
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
        <Notes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  