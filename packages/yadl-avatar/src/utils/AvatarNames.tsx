import { AvatarProps } from "../components/AvatarComponent";

export interface AvatarNames {
    [key: string]: AvatarProps;
}

export const AvatarNames: AvatarNames = {
    textPrimary: {
        "avatarStyle": "Circle",
        "topType": "LongHairStraight",
        "accessoriesType": "Blank",
        "hairColor": "BrownDark",
        "facialHairType": "Blank",
        "clotheType": "BlazerShirt",
        "eyeType": "Default",
        "eyebrowType": "Default",
        "mouthType": "Default",
        "skinColor": "Light",
        width: 100,
        height: 100
    },
};