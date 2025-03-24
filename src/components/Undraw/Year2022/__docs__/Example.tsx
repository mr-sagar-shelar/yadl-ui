import React, { FC } from "react";
  import Year2022 from "../Year2022";
  
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
        <Year2022 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  