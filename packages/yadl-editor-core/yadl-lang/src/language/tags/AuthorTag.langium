import "../common"

AuthorProfilePicAttribute:
    'profilePic' ':' profilePic=STRING;

AuthorProfileHandleAttribute:
    'profileHandle' ':' profileHandle=STRING;

AuthorTagAttributes:
    IdAttribute | AuthorProfilePicAttribute | AuthorProfileHandleAttribute | DimensionAttribute | PositionAttribute | ClassesAttribute | FontFamilyAttribute;

AuthorTag:
    '<Author' (attributes+=AuthorTagAttributes)* '/>';