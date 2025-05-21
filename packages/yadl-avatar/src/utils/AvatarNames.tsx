import { AvatarProps } from "../components/AvatarComponent";

export interface AvatarNames {
    [key: string]: AvatarProps;
}

export const AvatarNames: AvatarNames = {
    default: {
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
    first: {
        "avatarStyle": "Circle",
        'topType': 'LongHairStraight',
        'accessoriesType': 'Wayfarers',
        'hairColor': 'Brown',
        'facialHairType': 'Blank',
        'facialHairColor': 'Brown',
        'clotheType': 'BlazerSweater',
        'clotheColor': 'PastelBlue',
        'eyeType': 'Close',
        'eyebrowType': 'RaisedExcited',
        'mouthType': 'Twinkle',
        'skinColor': 'DarkBrown',
        width: 100,
        height: 100
    },
    second: {
        "avatarStyle": "Circle",
        'topType': 'ShortHairShortWaved',
        'accessoriesType': 'Round',
        'hairColor': 'Brown',
        'facialHairType': 'MoustacheMagnum',
        'facialHairColor': 'BrownDark',
        'clotheType': 'BlazerShirt',
        'eyeType': 'Default',
        'eyebrowType': 'Default',
        'mouthType': 'Twinkle',
        'skinColor': 'Brown',
        width: 100,
        height: 100
    },
    third: {
        "avatarStyle": "Circle",
        'topType': 'Turban',
        'accessoriesType': 'Blank',
        'hairColor': 'Heather',
        'facialHairType': 'MoustacheMagnum',
        'facialHairColor': 'BrownDark',
        'clotheType': 'Hoodie',
        'clotheColor': 'Blue03',
        'eyeType': 'Surprised',
        'eyebrowType': 'FlatNatural',
        'mouthType': 'Twinkle',
        'skinColor': 'DarkBrown',
        width: 100,
        height: 100
    }
};