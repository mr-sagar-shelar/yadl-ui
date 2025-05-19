import "../common"

TextComponents:
    'text'(name=ID)? (text=STRING) ('{'
        (position=Position)?
        (dimension=Dimension)?
        (fontFamily=FontFamily)?
        (classes=Classes)?
    '}')?;