import "../common"

Property:
    (WidthAttribute | HeightAttribute | IdAttribute | StyleProperty)
;

Div:
    '<Div' (properties+=Property)* '>';