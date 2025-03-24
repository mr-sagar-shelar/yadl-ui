import React, { FC } from "react";
  import NewYear2022 from "../NewYear2022";
  
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
        <NewYear2022 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  