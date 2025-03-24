import React, { FC } from "react";
  import OutdoorsOutdoors from "../OutdoorsOutdoors";
  
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
        <OutdoorsOutdoors width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  