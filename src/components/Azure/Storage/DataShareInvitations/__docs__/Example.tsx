import React, { FC } from "react";
  import DataShareInvitations from "../DataShareInvitations";
  
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
        <DataShareInvitations width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  