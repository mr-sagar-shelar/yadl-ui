import React, { FC } from "react";
  import Templates from "../Templates";
  
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
        <Templates width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  