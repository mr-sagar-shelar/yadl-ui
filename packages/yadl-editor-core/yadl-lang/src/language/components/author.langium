import "../common"

ProfilePic:
    'profilePic:' profilePic=STRING;

ProfileHandle:
    'profileHandle:' profileHandle=STRING;

Authors:
    'author' (name=STRING) (profilePic=ProfilePic)? (profileHandle=ProfileHandle)? ('{'
        (position=Position)?
        (dimension=Dimension)?
        (fontFamily=FontFamily)?
        (classes=Classes)?
    '}')?;