import "../common"

AvatarStyleTypes returns string:
    'Circle' | 'Tranparent';

AvatarTopTypes returns string:
    'NoHair' | 'Eyepatch' | 'Hat' | 'Hijab' | 'Turban' | 'WinterHat1' | 'WinterHat2' | 'WinterHat3' | 'WinterHat4' | 'LongHairBigHair' | 'LongHairBob' | 'LongHairBun' | 'LongHairCurly' | 'LongHairCurvy' | 'LongHairDreads' | 'LongHairFrida' | 'LongHairFro' | 'LongHairFroBand' | 'LongHairNotTooLong' | 'LongHairShavedSides' | 'LongHairMiaWallace' | 'LongHairStraight' | 'LongHairStraight2' | 'LongHairStraightStrand' | 'ShortHairDreads01' | 'ShortHairDreads02' | 'ShortHairFrizzle' | 'ShortHairShaggyMullet' | 'ShortHairShortCurly' | 'ShortHairShortFlat' | 'ShortHairShortRound' | 'ShortHairShortWaved' | 'ShortHairSides' | 'ShortHairTheCaesar' | 'ShortHairTheCaesarSidePart';

AvatarAccessoriesTypes returns string:
    'Blank' | 'Kurt' | 'Prescription01' | 'Prescription02' | 'Round' | 'Sunglasses' | 'Wayfarers';

AvatarHairColorTypes returns string:
    'Auburn' | 'Black' | 'Blonde' | 'BlondeGolden' | 'Brown' | 'BrownDark' | 'PastelPink' | 'Blue' | 'Platinum' | 'Red' | 'SilverGray';

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

AvatarStyleAttribute:
    'style' ':' style=AvatarStyleTypes;

AvatarTopTypeAttribute:
    'topType' ':' topType=AvatarTopTypes;

AvatarAccessoriesTypeAttribute:
    'accessoriesType' ':' accessoriesType=AvatarAccessoriesTypes;

AvatarHairColorAttribute:
    'hairColor' ':' hairColor=AvatarHairColorTypes;

AvatarFacialHairTypeAttribute:
    'facialHairType' ':' facialHairType=AvatarFacialHairTypes;

AvatarClotheTypeAttribute:
    'clotheType' ':' clotheType=AvatarClotheTypes;

AvatarEyeTypeAttribute:
    'eyeType' ':' eyeType=AvatarEyeTypes;

AvatarEyebrowTypeAttribute:
    'eyebrowType' ':' eyebrowType=AvatarEyebrowTypes;

AvatarMouthTypeAttribute:
    'mouthType' ':' mouthType=AvatarMouthTypes;

AvatarSkinColorAttribute:
    'skinColor' ':' skinColor=AvatarSkinColorTypes;

AvatarGraphicTypeAttribute:
    'graphicType' ':' graphicType=GraphicTypeTypes;

AvatarTagAttributes:
    IdAttribute | DimensionAttribute | PositionAttribute | ClassesAttribute | FontFamilyAttribute |
    AvatarStyleAttribute | AvatarTopTypeAttribute | AvatarAccessoriesTypeAttribute | AvatarHairColorAttribute | AvatarFacialHairTypeAttribute | 
    AvatarClotheTypeAttribute | AvatarEyeTypeAttribute | AvatarEyebrowTypeAttribute | AvatarMouthTypeAttribute | AvatarSkinColorAttribute | AvatarGraphicTypeAttribute;

AvatarTag:
    '<Avatar' (attributes+=AvatarTagAttributes)* '/>';