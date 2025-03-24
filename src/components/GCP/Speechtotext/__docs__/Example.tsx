import React, { FC } from "react";
  import Speechtotext from "../Speechtotext";
  
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
        <Speechtotext width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  