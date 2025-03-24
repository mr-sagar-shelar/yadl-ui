import React, { FC } from "react";
  import LogOut from "../LogOut";
  
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
        <LogOut width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  