import type { Meta, StoryObj } from "@storybook/react";
import UnrealEngine from "../UnrealEngine";

const meta: Meta<typeof UnrealEngine> = { title: "SkillIcon/UnrealEngine", component: UnrealEngine };

export default meta;
type Story = StoryObj<typeof UnrealEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
