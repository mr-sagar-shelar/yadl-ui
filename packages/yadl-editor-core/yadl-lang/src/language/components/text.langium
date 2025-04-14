import "../common"


FontFamily:
    'fontFamily' fontFamily=STRING;

Classes:
    'classes' classes=STRING;

TextComponent:
    'text' (text=STRING) ('{'
        (position=Position)?
        (fontFamily=FontFamily)?
        (classes=Classes)?
    '}')?;