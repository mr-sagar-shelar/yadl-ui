export * from "./utils";
export * from "./IconNames";
export * from "./AwsIcons";
export * from "./AzureIcons";
export * from "./SkillIcons";
export * from "./GCPIcons";
export * from "./ThemeIsleIcons";
export * from "./UndrawIcons";
export * from "./BoxeNames";
export * from "./TextNames";

export interface IconDetails {
  name: string;
  icon: string;
}
export interface IconNames {
  [key: string]: IconDetails;
}
