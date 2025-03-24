import React, { FC } from "react";
  import RemoteMeeting from "../RemoteMeeting";
  
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
        <RemoteMeeting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  