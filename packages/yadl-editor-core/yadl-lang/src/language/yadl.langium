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


entry Model:
    (persons+=Person | greetings+=Greeting | awsIcons+=AwsIcons | gcpIcons+=GcpIcons | azureIcons+=AzureIcons
    | skillIcons+=SkillIcons | themeisleIcons+=ThemeisleIcons | undrawIcons+=UndrawIcons
    | textComponents+=TextComponents | edges+=Edge | boxes+=BoxComponents | avatars+=Avatars)*;

Person:
    'person' name=ID;

Greeting:
    'Hello' person=[Person:ID] '!';

