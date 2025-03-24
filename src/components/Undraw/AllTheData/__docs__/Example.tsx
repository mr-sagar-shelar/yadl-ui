import React, { FC } from "react";
  import AllTheData from "../AllTheData";
  
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
        <AllTheData width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  