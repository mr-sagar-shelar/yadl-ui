import "../common"

Property:
    (WidthProperty | HeightProperty | IdProperty | StyleProperty)
;

WidthProperty:
    'width' '=' width=NUMBER
;

HeightProperty:
    'height' '=' height=NUMBER
;

IdProperty:
    'id' '=' id=STRING
;

StyleProperty:
    'style' '=' '{' (styleAttributes+=StyleAttribute (',' styleAttributes+=StyleAttribute)*)? '}'
;

StyleAttribute:
    (BackgroundColorAttribute | FontSizeAttribute | TextColorAttribute)
;

BackgroundColorAttribute:
    'background-color' ':' backgroundColor=STRING
;

FontSizeAttribute:
    'font-size' ':' fontSize=STRING // Using STRING for now, could be INT + Unit later
;

TextColorAttribute:
    'text-color' ':' textColor=STRING
;

Div:
    '<Div' (properties+=Property)* '>';