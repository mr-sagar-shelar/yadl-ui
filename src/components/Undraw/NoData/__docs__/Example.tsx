import React, { FC } from "react";
  import NoData from "../NoData";
  
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
        <NoData width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  