import type { Meta, StoryObj } from "@storybook/react";
import Npm from "../Npm";

const meta: Meta<typeof Npm> = { title: "SkillIcon/Npm", component: Npm };

export default meta;
type Story = StoryObj<typeof Npm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
