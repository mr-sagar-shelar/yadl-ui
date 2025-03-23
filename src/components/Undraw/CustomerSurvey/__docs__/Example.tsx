import React, { FC } from "react";
import CustomerSurvey from "../CustomerSurvey";

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
      <CustomerSurvey width="500px" height="500px" />
    </div>
  );
};

export default Example;
