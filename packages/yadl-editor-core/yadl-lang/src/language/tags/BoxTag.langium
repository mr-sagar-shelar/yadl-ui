import "../common"

BoxTypeAttributes returns string:
    'Box1' | 'Box2' | 'Box3';

BoxTypeAttribute:
    'type' ':' type=(BoxTypeAttributes);

BoxTagAttributes:
    IdAttribute | BoxTypeAttribute | DimensionAttribute | PositionAttribute | ClassesAttribute | PropsAttribute;

BoxTag:
    '<Box' (attributes+=BoxTagAttributes)* '/>';