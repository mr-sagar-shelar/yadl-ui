import { createContext, useContext, useState } from "react";
export interface DragDropProps {
  type: string;
  data?: any;
}

const DnDContext = createContext([null, (_: DragDropProps | null) => { }]);

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
