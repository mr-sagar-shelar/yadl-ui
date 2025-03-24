import React, { FC } from "react";
  import Convert from "../Convert";
  
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
        <Convert width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  