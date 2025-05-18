import "../common"

FontFamily:
    'fontFamily:' fontFamily=STRING;

TextComponents:
    'text'(name=ID)? (text=STRING) ('{'
        (position=Position)?
        (dimension=Dimension)?
        (fontFamily=FontFamily)?
        (classes=Classes)?
    '}')?;