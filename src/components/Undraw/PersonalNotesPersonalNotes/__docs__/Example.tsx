import React, { FC } from "react";
  import PersonalNotesPersonalNotes from "../PersonalNotesPersonalNotes";
  
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
        <PersonalNotesPersonalNotes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  