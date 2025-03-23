import React, { FC } from "react";
import OrganizingData from "../OrganizingData";

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
      <OrganizingData width="500px" height="500px" />
    </div>
  );
};

export default Example;
