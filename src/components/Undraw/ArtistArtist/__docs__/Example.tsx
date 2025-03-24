import React, { FC } from "react";
  import ArtistArtist from "../ArtistArtist";
  
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
        <ArtistArtist width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  