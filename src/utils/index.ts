export * from "./utils";
export * from "./IconNames";
export * from "./AzureIcons";
export * from "./GCPIcons";
export * from "./ThemeIsleIcons";
export * from "./UndrawIcons";
export * from "./BoxeNames";
export * from "./TextNames";
export * from "./SkillIcons";

export interface IconDetails {
  name: string;
  icon: string;
}
export interface IconNames {
  [key: string]: IconDetails;
}
