import React, { FC } from "react";
import PhotoAlbum from "../PhotoAlbum";

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
      <PhotoAlbum width="500px" height="500px" />
    </div>
  );
};

export default Example;
