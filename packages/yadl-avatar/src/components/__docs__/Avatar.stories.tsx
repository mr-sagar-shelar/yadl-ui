import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../AvatarComponent";

const meta: Meta<typeof Avatar> = { title: "AWS/Analytics/Avatar", component: Avatar };

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
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
    },
    argTypes: {
        avatarStyle: {
            options: ['Circle', 'Tranparent'],
            control: { type: 'select', },
        },
        accessoriesType: {
            options: ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
            control: { type: 'select', },
        },
        clotheType: {
            options: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
            control: { type: 'select', },
        },
        eyeType: {
            options: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'],
            control: { type: 'select', },
        },
        facialHairType: {
            options: ['Blank', 'BeardMedium', 'BeardLight', 'BeardMajestic', 'MoustacheFancy', 'MoustacheMagnum'],
            control: { type: 'select', },
        },
        topType: {
            options: ['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart'],
            control: { type: 'select', },
        },
        facialHairColor: {
            options: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Blue', 'Platinum', 'Red', 'SilverGray'],
            control: { type: 'select', },
        },
        clotheColor: {
            options: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
            control: { type: 'select', },
        },
        graphicType: {
            options: ['Bat', 'Cumbia', 'Deer', 'Diamond', 'Hola', 'Pizza', 'Resist', 'Selena', 'Bear', 'SkullOutline', 'Skull'],
            control: { type: 'select', },
        },
        eyebrowType: {
            options: ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'],
            control: { type: 'select', },
        },
        mouthType: {
            options: ['Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'],
            control: { type: 'select', },
        },
        skinColor: {
            options: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'],
            control: { type: 'select', },
        },
    },
};