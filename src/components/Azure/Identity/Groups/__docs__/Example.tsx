import React, { FC } from "react";
  import Groups from "../Groups";
  
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
        <Groups width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  