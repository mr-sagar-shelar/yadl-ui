import React, { FC } from "react";
  import PlayingFetch from "../PlayingFetch";
  
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
        <PlayingFetch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  