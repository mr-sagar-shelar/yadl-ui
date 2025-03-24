import React, { FC } from "react";
  import RestorePoints from "../RestorePoints";
  
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
        <RestorePoints width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  