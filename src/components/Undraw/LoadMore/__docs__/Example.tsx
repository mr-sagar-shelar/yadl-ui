import React, { FC } from "react";
  import LoadMore from "../LoadMore";
  
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
        <LoadMore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  