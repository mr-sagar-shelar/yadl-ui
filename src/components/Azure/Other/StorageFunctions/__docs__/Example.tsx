import React, { FC } from "react";
  import StorageFunctions from "../StorageFunctions";
  
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
        <StorageFunctions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  