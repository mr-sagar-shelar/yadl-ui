import type { Meta, StoryObj } from "@storybook/react";
import Regex from "../Regex";

const meta: Meta<typeof Regex> = { title: "SkillIcon/Regex", component: Regex };

export default meta;
type Story = StoryObj<typeof Regex>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
