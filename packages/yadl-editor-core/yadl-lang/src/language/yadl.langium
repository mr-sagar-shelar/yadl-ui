grammar Yadl
import "./common"
import "./icons/awsIcons"
import "./icons/gcpIcons"
import "./icons/azureIcons"
import "./icons/skillIcons"
import "./icons/themeisleIcons"
import "./icons/undrawIcons"
import "./components/text"
import "./components/box"
import "./components/edge"
import "./components/avatar"
import "./components/author"


entry Model:
    (awsIcons+=AwsIcons | gcpIcons+=GcpIcons | azureIcons+=AzureIcons
    | skillIcons+=SkillIcons | themeisleIcons+=ThemeisleIcons | undrawIcons+=UndrawIcons
    | textComponents+=TextComponents | edges+=Edges | boxes+=BoxComponents | avatars+=Avatar | authors+=Authors
    | divs+=Div
    )*;



Property:
    (WidthProperty | HeightProperty | IdProperty)
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

Div:
    '<Div' (properties+=Property)* '>';