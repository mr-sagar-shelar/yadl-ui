import React, { FC } from "react";
  import Doctors from "../Doctors";
  
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
        <Doctors width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  