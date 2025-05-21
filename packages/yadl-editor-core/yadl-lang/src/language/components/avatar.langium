import "../common"

AvatarStyleTypes returns string:
    'Circle' | 'Tranparent';

AvatarTopTypes returns string:
    'NoHair' | 'Eyepatch' | 'Hat' | 'Hijab' | 'Turban' | 'WinterHat1' | 'WinterHat2' | 'WinterHat3' | 'WinterHat4' | 'LongHairBigHair' | 'LongHairBob' | 'LongHairBun' | 'LongHairCurly' | 'LongHairCurvy' | 'LongHairDreads' | 'LongHairFrida' | 'LongHairFro' | 'LongHairFroBand' | 'LongHairNotTooLong' | 'LongHairShavedSides' | 'LongHairMiaWallace' | 'LongHairStraight' | 'LongHairStraight2' | 'LongHairStraightStrand' | 'ShortHairDreads01' | 'ShortHairDreads02' | 'ShortHairFrizzle' | 'ShortHairShaggyMullet' | 'ShortHairShortCurly' | 'ShortHairShortFlat' | 'ShortHairShortRound' | 'ShortHairShortWaved' | 'ShortHairSides' | 'ShortHairTheCaesar' | 'ShortHairTheCaesarSidePart';

AvatarAccessoriesTypes returns string:
    'Blank' | 'Kurt' | 'Prescription01' | 'Prescription02' | 'Round' | 'Sunglasses' | 'Wayfarers';

AvatarHairColorTypes returns string:
    'Auburn' | 'Black' | 'Blonde' | 'BlondeGolden' | 'BlondeGolden' | 'Brown' | 'BrownDark' | 'PastelPink' | 'Blue' | 'Platinum' | 'Red' | 'SilverGray';

AvatarFacialHairTypes returns string:
    'Blank' | 'BeardMedium' | 'BeardLight' | 'BeardMajestic' | 'MoustacheFancy' | 'MoustacheMagnum';

AvatarClotheTypes returns string:
    'BlazerShirt' | 'BlazerSweater' | 'CollarSweater' | 'GraphicShirt' | 'Hoodie' | 'Overall' | 'ShirtCrewNeck' | 'ShirtScoopNeck' | 'ShirtVNeck';

AvatarEyeTypes returns string:
    'Close' | 'Cry' | 'Default' | 'Dizzy' | 'EyeRoll' | 'Happy' | 'Hearts' | 'Side' | 'Squint' | 'Surprised' | 'Wink' | 'WinkWacky';

AvatarEyebrowTypes returns string:
    'Angry' | 'AngryNatural' | 'Default' | 'DefaultNatural' | 'FlatNatural' | 'RaisedExcited' | 'RaisedExcitedNatural' | 'SadConcerned' | 'SadConcernedNatural' | 'UnibrowNatural' | 'UpDown' | 'UpDownNatural';

AvatarMouthTypes returns string:
    'Concerned' | 'Default' | 'Disbelief' | 'Eating' | 'Grimace' | 'Sad' | 'ScreamOpen' | 'Serious' | 'Smile' | 'Tongue' | 'Twinkle' | 'Vomit';

AvatarSkinColorTypes returns string:
    'Tanned' | 'Yellow' | 'Pale' | 'Light' | 'Brown' | 'DarkBrown' | 'Black';

GraphicTypeTypes returns string:
    'Bat' | 'Cumbia' | 'Deer' | 'Diamond' | 'Hola' | 'Pizza' | 'Resist' | 'Selena' | 'Bear' | 'SkullOutline' | 'Skull';
    
AvatarStyle:
    'style:' style=AvatarStyleTypes;

AvatarTopType:
    'topType:' topType=AvatarTopTypes;

AvatarAccessoriesType:
    'accessoriesType:' accessoriesType=AvatarAccessoriesTypes;

AvatarHairColor:
    'hairColor:' hairColor=AvatarHairColorTypes;

AvatarFacialHairType:
    'facialHairType:' facialHairType=AvatarFacialHairTypes;

AvatarClotheType:
    'clotheType:' clotheType=AvatarClotheTypes;

AvatarEyeType:
    'eyeType:' eyeType=AvatarEyeTypes;

AvatarEyebrowType:
    'eyebrowType:' eyebrowType=AvatarEyebrowTypes;

AvatarMouthType:
    'mouthType:' mouthType=AvatarMouthTypes;

AvatarSkinColor:
    'skinColor:' skinColor=AvatarSkinColorTypes;

GraphicType:
    'graphicType:' graphicType=GraphicTypeTypes;

Avatars:
    'avatar' (name=STRING)? (style=AvatarStyle)? (topType=AvatarTopType)? (accessoriesType=AvatarAccessoriesType)? (hairColor=AvatarHairColor)? (facialHairType=AvatarFacialHairType)? (clotheType=AvatarClotheType)? (eyeType=AvatarEyeType)? (eyebrowType=AvatarEyebrowType)? (mouthType=AvatarMouthType)? (skinColor=AvatarSkinColor)? ('{'
        (position=Position)?
        (dimension=Dimension)?
        (fontFamily=FontFamily)?
        (classes=Classes)?
    '}')?;