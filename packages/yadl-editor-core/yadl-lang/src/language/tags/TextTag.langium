import "../common"

TextAttribute:
    'text' ':' text=STRING;

TextTagAttributes:
    IdAttribute | TextAttribute | DimensionAttribute | PositionAttribute | FontFamilyAttribute | ClassesAttribute;

TextTag:
    '<Text' (attributes+=TextTagAttributes)* '/>';