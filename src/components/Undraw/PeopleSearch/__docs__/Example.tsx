import React, { FC } from "react";
import PeopleSearch from "../PeopleSearch";

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
      <PeopleSearch width="500px" height="500px" />
    </div>
  );
};

export default Example;
