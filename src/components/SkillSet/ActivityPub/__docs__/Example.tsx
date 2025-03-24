import React, { FC } from "react";
  import ActivityPub from "../ActivityPub";
  
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
        <ActivityPub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  