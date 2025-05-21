import { createContext, useContext, useState } from "react";
export interface AvatarProps {
    avatarStyle: string
    className?: string;
    style?: React.CSSProperties
    topType?: string
    accessoriesType?: string
    hairColor?: string
    facialHairType?: string
    facialHairColor?: string
    clotheType?: string
    clotheColor?: string
    graphicType?: string
    eyeType?: string
    eyebrowType?: string
    mouthType?: string
    skinColor?: string
    pieceType?: string
    pieceSize?: string
    viewBox?: string
}

const AvatarContext = createContext<AvatarProps | null>(null);
// const AvatarContext = createContext(null);

// @ts-ignore
export const AvatarProvider = ({ children }) => {
    const [type, setType] = useState<AvatarProps>();

    return (
        // @ts-ignore
        <AvatarContext.Provider value={[type, setType]} >
            {children}
        </AvatarContext.Provider>
    );
};

export default AvatarContext;

export const useAvatarContext = () => {
    return useContext(AvatarContext);
};