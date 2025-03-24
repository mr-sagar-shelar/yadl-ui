import React, { FC } from "react";
  import StorSimpleDataManagers from "../StorSimpleDataManagers";
  
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
        <StorSimpleDataManagers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  