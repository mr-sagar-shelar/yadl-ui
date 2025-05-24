import "../common"

BoxTypeAttribute returns string:
    'Box1' | 'Box2';

BoxTagAttributes:
    IdAttribute | BoxTypeAttribute | DimensionAttribute | PositionAttribute | ClassesAttribute;

BoxTag:
    '<Box' (attributes+=BoxTagAttributes)* '/>';