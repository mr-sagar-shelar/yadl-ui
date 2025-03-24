import React, { FC } from "react";
  import SitetoSiteVPN from "../SitetoSiteVPN";
  
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
        <SitetoSiteVPN width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  