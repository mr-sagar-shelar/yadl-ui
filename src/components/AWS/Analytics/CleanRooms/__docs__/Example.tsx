import React, { FC } from "react";
  import CleanRooms from "../CleanRooms";
  
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
        <CleanRooms width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  