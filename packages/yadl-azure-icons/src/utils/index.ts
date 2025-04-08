export * from "./AzureIconNames";

export interface IconDetails {
  name: string;
  icon: string;
}
export interface IconNames {
  [key: string]: IconDetails;
}
