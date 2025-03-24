import React, { FC } from "react";
  import DesignNotes from "../DesignNotes";
  
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
        <DesignNotes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  