import "../common"

CodeAttribute:
    'code' ':' code=BACKTICK_STRING;

SvgTagAttributes:
    IdAttribute | PositionAttribute | CodeAttribute;

SvgTag:
    '<Svg' (attributes+=SvgTagAttributes)* '/>';