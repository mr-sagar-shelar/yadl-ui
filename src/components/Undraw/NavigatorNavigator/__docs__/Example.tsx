import React, { FC } from "react";
  import NavigatorNavigator from "../NavigatorNavigator";
  
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
        <NavigatorNavigator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  