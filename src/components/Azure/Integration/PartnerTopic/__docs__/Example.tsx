import React, { FC } from "react";
  import PartnerTopic from "../PartnerTopic";
  
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
        <PartnerTopic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  