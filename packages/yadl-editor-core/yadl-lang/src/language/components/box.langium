import "../common"

BoxComponentTypes returns string:
    'Box1' | 'Box2';

BoxComponents:
    'box' (name=ID)? boxType=(BoxComponentTypes) ('{'
        (position=Position)?
        (dimension=Dimension)?
        (classes=Classes)?
    '}')?;