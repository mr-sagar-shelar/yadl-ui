import React, { FC } from "react";
  import Party from "../Party";
  
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
        <Party width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  