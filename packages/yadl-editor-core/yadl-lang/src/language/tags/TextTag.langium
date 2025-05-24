import "../common"

TextAttribute:
    'text' ':' text=STRING;

TextTagAttributes:
    IdAttribute | TextAttribute | DimensionAttribute | PositionAttribute;

TextTag:
    '<Text' (attributes+=TextTagAttributes)* '/>';