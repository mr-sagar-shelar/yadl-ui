grammar Yadl
import "./common"
import "./awsIcons"
import "./gcpIcons"
import "./azureIcons"
import "./skillIcons"
import "./themeisleIcons"
import "./undrawIcons"


entry Model:
    (persons+=Person | greetings+=Greeting | awsIcons+=AwsIcons | gcpIcons+=GcpIcons | azureIcons+=AzureIcons
    | skillIcons+=SkillIcons | themeisleIcons+=ThemeisleIcons | undrawleIcons+=UndrawIcons)*;

Person:
    'person' name=ID;

Greeting:
    'Hello' person=[Person:ID] '!';

