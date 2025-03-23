import React, { FC } from "react";
import OrganizePhotos from "../OrganizePhotos";

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
      <OrganizePhotos width="500px" height="500px" />
    </div>
  );
};

export default Example;
