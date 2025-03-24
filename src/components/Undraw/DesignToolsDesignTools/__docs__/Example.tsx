import React, { FC } from "react";
  import DesignToolsDesignTools from "../DesignToolsDesignTools";
  
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
        <DesignToolsDesignTools width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  