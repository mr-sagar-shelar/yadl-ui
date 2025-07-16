import "../common"

GroupNameAttribute:
    'name' ':' name=STRING;


GroupTagAttributes:
    IdAttribute | DimensionAttribute | PositionAttribute | ClassesAttribute | GroupNameAttribute ;

GroupTag:
    '<Group' (attributes+=GroupTagAttributes)* '/>';