import React, { FC } from "react";
  import Zoom_inZoomIn from "../Zoom_inZoomIn";
  
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
        <Zoom_inZoomIn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  