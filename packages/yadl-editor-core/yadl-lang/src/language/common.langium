ClassesAttribute:
    'classes' ':' classes=STRING;

QualifiedName returns string:
    ID ('.' ID)*;

WidthAttribute:
    'width' ':' width=NUMBER;

HeightAttribute:
    'height' ':'  height=NUMBER;

XAttribute:
    'x' ':' (isNegativeX?='-')? x=NUMBER;

YAttribute:
    'y' ':' (isNegativeY?='-')? y=NUMBER;

IdAttribute:
    'id' ':' id=STRING;

BackgroundColorAttribute:
    'background-color' ':' backgroundColor=STRING
;

PositionAttributes:
    XAttribute | YAttribute;

PositionAttribute:
    'position' ':' '{'
        (attributes+=PositionAttributes)+ 
    '}';

DimensionAttributes:
    WidthAttribute | HeightAttribute;

DimensionAttribute:
    'dimension' ':' '{'
        (attributes+=DimensionAttributes)+ 
    '}';

FontSizeAttribute:
    'font-size' ':' fontSize=NUMBER;

FontFamily:
    'fontFamily' ':' fontFamily=STRING;

FontFamilyAttribute:
    'fontFamily' ':' fontFamily=STRING;

TextColorAttribute:
    'text-color' ':' textColor=STRING;

// StringPropRowAttribute:
//     key=STRING ':' value=STRING;

// NumberPropRowAttribute:
//     key=STRING ':' value=NUMBER;


// PropsAttribute:
//     'props' '{' (props+=StringPropRowAttribute(',' props+=StringPropRowAttribute)*)? '}';
// 'props' '{' (props+=StringPropRowAttribute)+ '}';

PropsAttribute:
    'props' ':' props=PropsObject;

PropsObject:
    '{' (properties+=Property (',' properties+=Property)*)? '}';

Property:
    key=STRING ':' value=Value;

StringPropRowAttribute:
    value=STRING;

BacktickStringPropRowAttribute:
    value=BACKTICK_STRING;

NumberPropRowAttribute:
    value=NUMBER;

BooleanPropRowAttribute:
    value=BOOLEAN;

Value:
    StringPropRowAttribute | BacktickStringPropRowAttribute |  NumberPropRowAttribute | BooleanPropRowAttribute | ArrayValue;

ArrayValue:
    '[' (elements+=Value (',' elements+=Value)*)? ']';

StyleAttribute:
    (BackgroundColorAttribute | FontSizeAttribute | TextColorAttribute)
;

StyleProperty:
    'style' '=' '{' (styleAttributes+=StyleAttribute (',' styleAttributes+=StyleAttribute)*)? '}';

terminal NUMBER returns number: /[0-9]+(\.[0-9]*)?/;
hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal TEXT: /[^<>]+/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;
terminal BACKTICK_STRING: /`[^`]*`/;
terminal BOOLEAN: 'true' | 'false';

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
