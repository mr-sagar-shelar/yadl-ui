export interface DragDropProps {
    type: string;
    data?: any;
}
declare const DnDContext: import('react').Context<(((_: DragDropProps | null) => void) | null)[]>;
export declare const DnDProvider: ({ children }: {
    children: any;
}) => import("react/jsx-runtime").JSX.Element;
export default DnDContext;
export declare const useDnD: () => (((_: DragDropProps | null) => void) | null)[];
