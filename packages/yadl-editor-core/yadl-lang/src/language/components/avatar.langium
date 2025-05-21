import "../common"

AvatarStyle returns string:
    'Circle' | 'Tranparent';

AvatarTopType returns string:
    'NoHair' | 'Eyepatch' | 'Hat' | 'Hijab' | 'Turban' | 'WinterHat1' | 'WinterHat2' | 'WinterHat3' | 'WinterHat4' | 'LongHairBigHair' | 'LongHairBob' | 'LongHairBun' | 'LongHairCurly' | 'LongHairCurvy' | 'LongHairDreads' | 'LongHairFrida' | 'LongHairFro' | 'LongHairFroBand' | 'LongHairNotTooLong' | 'LongHairShavedSides' | 'LongHairMiaWallace' | 'LongHairStraight' | 'LongHairStraight2' | 'LongHairStraightStrand' | 'ShortHairDreads01' | 'ShortHairDreads02' | 'ShortHairFrizzle' | 'ShortHairShaggyMullet' | 'ShortHairShortCurly' | 'ShortHairShortFlat' | 'ShortHairShortRound' | 'ShortHairShortWaved' | 'ShortHairSides' | 'ShortHairTheCaesar' | 'ShortHairTheCaesarSidePart';

AvatarAccessoriesType returns string:
    'Blank' | 'Kurt' | 'Prescription01' | 'Prescription02' | 'Round' | 'Sunglasses' | 'Wayfarers';

AvatarHairColor returns string:
    'Auburn' | 'Black' | 'Blonde' | 'BlondeGolden' | 'BlondeGolden' | 'Brown' | 'BrownDark' | 'PastelPink' | 'Blue' | 'Platinum' | 'Red' | 'SilverGray';

AvatarFacialHairType returns string:
    'Blank' | 'BeardMedium' | 'BeardLight' | 'BeardMajestic' | 'MoustacheFancy' | 'MoustacheMagnum';

AvatarClotheType returns string:
    'BlazerShirt' | 'BlazerSweater' | 'CollarSweater' | 'GraphicShirt' | 'Hoodie' | 'Overall' | 'ShirtCrewNeck' | 'ShirtScoopNeck' | 'ShirtVNeck';

AvatarEyeType returns string:
    'Close' | 'Cry' | 'Default' | 'Dizzy' | 'EyeRoll' | 'Happy' | 'Hearts' | 'Side' | 'Squint' | 'Surprised' | 'Wink' | 'WinkWacky';

AvatarEyebrowType returns string:
    'Angry' | 'AngryNatural' | 'Default' | 'DefaultNatural' | 'FlatNatural' | 'RaisedExcited' | 'RaisedExcitedNatural' | 'SadConcerned' | 'SadConcernedNatural' | 'UnibrowNatural' | 'UpDown' | 'UpDownNatural';

AvatarMouthType returns string:
    'Concerned' | 'Default' | 'Disbelief' | 'Eating' | 'Grimace' | 'Sad' | 'ScreamOpen' | 'Serious' | 'Smile' | 'Tongue' | 'Twinkle' | 'Vomit';

AvatarSkinColor returns string:
    'Tanned' | 'Yellow' | 'Pale' | 'Light' | 'Brown' | 'DarkBrown' | 'Black';


Avatars:
    'Avatar' (name=STRING) (style=AvatarStyle)? (topType=AvatarTopType)? (accessoriesType=AvatarAccessoriesType)? (hairColor=AvatarHairColor)? (facialHairType=AvatarFacialHairType)? (clotheType=AvatarClotheType)? (eyeType=AvatarEyeType)? (eyebrowType=AvatarEyebrowType)? (mouthType=AvatarMouthType)? (skinColor=AvatarSkinColor)? ('{'
        (position=Position)?
        (dimension=Dimension)?
        (fontFamily=FontFamily)?
        (classes=Classes)?
    '}')?;