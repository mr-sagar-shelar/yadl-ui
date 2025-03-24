import React, { FC } from "react";
  import Guide from "../Guide";
  
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
        <Guide width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  