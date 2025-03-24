import React, { FC } from "react";
  import WorkSpacesFamily from "../WorkSpacesFamily";
  
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
        <WorkSpacesFamily width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  