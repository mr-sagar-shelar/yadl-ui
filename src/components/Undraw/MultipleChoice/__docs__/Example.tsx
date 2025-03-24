import React, { FC } from "react";
  import MultipleChoice from "../MultipleChoice";
  
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
        <MultipleChoice width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  