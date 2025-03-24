import React, { FC } from "react";
  import TrackAndFieldTrackAndField from "../TrackAndFieldTrackAndField";
  
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
        <TrackAndFieldTrackAndField width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  