grammar Yadl
import "./common"
import "./awsIcons"


entry Model:
    (persons+=Person | greetings+=Greeting |awsIcons+=AwsIcons)*;

Person:
    'person' name=ID;

Greeting:
    'Hello' person=[Person:ID] '!';

