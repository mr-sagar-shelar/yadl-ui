import React, { FC } from "react";
  import ReadingList from "../ReadingList";
  
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
        <ReadingList width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  