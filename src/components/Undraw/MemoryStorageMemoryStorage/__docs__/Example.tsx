import React, { FC } from "react";
import MemoryStorageMemoryStorage from "../MemoryStorageMemoryStorage";

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
      <MemoryStorageMemoryStorage width="500px" height="500px" />
    </div>
  );
};

export default Example;
