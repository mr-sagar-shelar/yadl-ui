import React, { FC } from "react";
  import StorSimpleDeviceManagers from "../StorSimpleDeviceManagers";
  
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
        <StorSimpleDeviceManagers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  