import React, { FC } from "react";
  import CreativeTeam from "../CreativeTeam";
  
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
        <CreativeTeam width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  