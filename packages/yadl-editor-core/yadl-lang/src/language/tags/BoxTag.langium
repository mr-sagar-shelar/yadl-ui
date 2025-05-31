import "../common"

BoxTypeAttributes returns string:
    'Box1' | 'Box2';

BoxTypeAttribute:
    'type' ':' type=(BoxTypeAttributes);

BoxTagAttributes:
    IdAttribute | BoxTypeAttribute | DimensionAttribute | PositionAttribute | ClassesAttribute;

BoxTag:
    '<Box' (attributes+=BoxTagAttributes)* '/>';