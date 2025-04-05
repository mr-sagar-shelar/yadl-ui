import type { Meta, StoryObj } from "@storybook/react";
import SearchSkillIcons from "../Search";

const meta: Meta<typeof SearchSkillIcons> = {
  title: "Search",
  component: SearchSkillIcons,
};

export default meta;
type Story = StoryObj<typeof SearchSkillIcons>;

export const Gradients: Story = {
  args: {},
};
