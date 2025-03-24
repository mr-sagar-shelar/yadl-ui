import React, { FC } from "react";
  import ReadNotes from "../ReadNotes";
  
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
        <ReadNotes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  