import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../AvatarComponent";

const meta: Meta<typeof Avatar> = { title: "AWS/Analytics/Avatar", component: Avatar };

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        "avatarStyle": 'Transparent',
        "topType": 'Turban',
        "accessoriesType": 'Wayfarers',
        "facialHairType": 'MoustacheFancy',
        "facialHairColor": 'Blonde',
        "clotheType": 'GraphicShirt',
        "clotheColor": 'Blue03',
        "graphicType": 'Skull',
        "eyeType": 'EyeRoll',
        "eyebrowType": 'UpDownNatural',
        "mouthType": 'ScreamOpen',
        "skinColor": 'Light',
    },
    argTypes: {
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
        // topType: {
        //     options: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        //     control: { type: 'select', },
        // },
    },
};