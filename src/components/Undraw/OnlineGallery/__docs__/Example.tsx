import React, { FC } from "react";
  import OnlineGallery from "../OnlineGallery";
  
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
        <OnlineGallery width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  