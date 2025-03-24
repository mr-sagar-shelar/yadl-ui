import React, { FC } from "react";
  import GoogleMapsPlatform from "../GoogleMapsPlatform";
  
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
        <GoogleMapsPlatform width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  