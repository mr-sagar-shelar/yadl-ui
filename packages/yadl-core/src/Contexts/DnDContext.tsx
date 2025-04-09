import { createContext, useContext, useState } from "react";
import { DragDropProps } from "../Interfaces";

const DnDContext = createContext([null, (_: DragDropProps | null) => {}]);

// @ts-ignore
export const DnDProvider = ({ children }) => {
  const [type, setType] = useState<DragDropProps | null>(null);

  return (
    // @ts-ignore
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};

export default DnDContext;

export const useDnD = () => {
  return useContext(DnDContext);
};
