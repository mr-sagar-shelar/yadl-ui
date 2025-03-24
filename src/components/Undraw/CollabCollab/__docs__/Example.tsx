import React, { FC } from "react";
  import CollabCollab from "../CollabCollab";
  
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
        <CollabCollab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  