import "../common"

CodeAttribute:
    'code' ':' code=BACKTICK_STRING;

SvgTagAttributes:
    IdAttribute | PositionAttribute | CodeAttribute | DimensionAttribute;

SvgTag:
    '<Svg' (attributes+=SvgTagAttributes)* '/>';