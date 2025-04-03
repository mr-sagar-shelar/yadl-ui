import * as ICONS from "../index";
import { SkillIconNames } from "./IconNames";

export const getIcon = (iconName: string) => {
  const iconNamePresent: boolean = SkillIconNames[iconName] != undefined;
  if (!iconNamePresent) {
    return null;
  }
  // @ts-ignore
  return ICONS[SkillIconNames[iconName]] ?? null;
};
