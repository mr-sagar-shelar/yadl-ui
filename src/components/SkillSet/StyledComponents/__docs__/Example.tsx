import React, { FC } from "react";
  import StyledComponents from "../StyledComponents";
  
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
        <StyledComponents width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  