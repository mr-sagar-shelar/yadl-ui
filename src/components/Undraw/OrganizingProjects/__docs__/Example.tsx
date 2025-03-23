import React, { FC } from "react";
import OrganizingProjects from "../OrganizingProjects";

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
      <OrganizingProjects width="500px" height="500px" />
    </div>
  );
};

export default Example;
