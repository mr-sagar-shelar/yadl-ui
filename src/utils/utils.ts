import * as ICONS from "../index";
import { IconNames } from "./IconNames";

export const getIcon = (iconName: string) => {
  const iconNamePresent: boolean = IconNames[iconName] != undefined;
  if (!iconNamePresent) {
    return null;
  }
  // @ts-ignore
  return ICONS[IconNames[iconName]] ?? null;
};
