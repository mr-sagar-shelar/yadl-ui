import React, { FC } from "react";
  import Card_postalCardPostal from "../Card_postalCardPostal";
  
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
        <Card_postalCardPostal width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  