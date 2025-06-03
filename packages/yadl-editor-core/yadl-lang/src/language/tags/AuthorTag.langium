import "../common"

AuthorSrcAttribute:
    'src' ':' src=STRING;

AuthorNameAttribute:
    'name' ':' name=STRING;

AuthorCaptionAttribute:
    'caption' ':' caption=STRING;

AuthorImageClassesAttribute:
    'imageClasses' ':' imageClasses=STRING;

AuthorCaptionClassesAttribute:
    'captionClasses' ':' captionClasses=STRING;

AuthorNameClassesAttribute:
    'nameClasses' ':' nameClasses=STRING;

AuthorNameFontFamilyAttribute:
    'nameFontFamily' ':' nameFontFamily=STRING;

AuthorCaptionFontFamilyAttribute:
    'captionFontFamily' ':' captionFontFamily=STRING;

AuthorTagAttributes:
    IdAttribute | DimensionAttribute | PositionAttribute | ClassesAttribute | AuthorSrcAttribute | AuthorNameAttribute |
    AuthorCaptionAttribute | AuthorImageClassesAttribute | AuthorCaptionClassesAttribute | AuthorNameClassesAttribute |
    AuthorNameFontFamilyAttribute | AuthorCaptionFontFamilyAttribute;

AuthorTag:
    '<Author' (attributes+=AuthorTagAttributes)* '/>';