import "../common"


FontFamily:
    'fontFamily' fontFamily=STRING;

Classes:
    'classes' classes=STRING;

TextComponents:
    'text' (text=STRING) ('{'
        (position=Position)?
        (fontFamily=FontFamily)?
        (classes=Classes)?
    '}')?;