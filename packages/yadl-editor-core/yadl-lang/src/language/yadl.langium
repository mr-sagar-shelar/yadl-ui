grammar Yadl
import "./common"
import "./icons/awsIcons"
import "./icons/gcpIcons"
import "./icons/azureIcons"
import "./icons/skillIcons"
import "./icons/themeisleIcons"
import "./icons/undrawIcons"
import "./components/text"


entry Model:
    (persons+=Person | greetings+=Greeting | awsIcons+=AwsIcons | gcpIcons+=GcpIcons | azureIcons+=AzureIcons
    | skillIcons+=SkillIcons | themeisleIcons+=ThemeisleIcons | undrawleIcons+=UndrawIcons
    | textComponents+=TextComponent)*;

Person:
    'person' name=ID;

Greeting:
    'Hello' person=[Person:ID] '!';

