import React, { FC } from "react";
  import GitLab from "../GitLab";
  
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
        <GitLab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  