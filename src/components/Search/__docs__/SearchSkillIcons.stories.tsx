import type { Meta, StoryObj } from "@storybook/react";
import SearchSkillIcons from "../SearchSkillIcons";

const meta: Meta<typeof SearchSkillIcons> = {
  title: "Search/SkillIcons",
  component: SearchSkillIcons,
};

export default meta;
type Story = StoryObj<typeof SearchSkillIcons>;

export const Gradients: Story = {
  args: {},
};
