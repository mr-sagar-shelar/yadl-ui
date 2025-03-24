import React, { FC } from "react";
  import SortingThoughts from "../SortingThoughts";
  
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
        <SortingThoughts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  