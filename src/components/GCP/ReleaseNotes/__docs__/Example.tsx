import React, { FC } from "react";
  import ReleaseNotes from "../ReleaseNotes";
  
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
        <ReleaseNotes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  