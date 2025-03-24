import React, { FC } from "react";
  import PodcastAudience from "../PodcastAudience";
  
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
        <PodcastAudience width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  