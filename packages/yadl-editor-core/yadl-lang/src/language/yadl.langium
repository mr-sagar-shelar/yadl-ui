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
import "./components/div"


entry Model:
    (awsIcons+=AwsIcons | gcpIcons+=GcpIcons | azureIcons+=AzureIcons
    | skillIcons+=SkillIcons | themeisleIcons+=ThemeisleIcons | undrawIcons+=UndrawIcons
    | textComponents+=TextComponents | edges+=Edges | boxes+=BoxComponents | avatars+=Avatar | authors+=Authors
    | divs+=Div
    )*;

