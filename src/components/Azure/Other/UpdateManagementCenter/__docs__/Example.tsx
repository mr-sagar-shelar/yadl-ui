import React, { FC } from "react";
  import UpdateManagementCenter from "../UpdateManagementCenter";
  
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
        <UpdateManagementCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  