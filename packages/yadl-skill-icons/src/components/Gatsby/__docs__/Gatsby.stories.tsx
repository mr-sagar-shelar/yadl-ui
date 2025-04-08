import type { Meta, StoryObj } from "@storybook/react";
import Gatsby from "../Gatsby";

const meta: Meta<typeof Gatsby> = { title: "SkillIcon/Gatsby", component: Gatsby };

export default meta;
type Story = StoryObj<typeof Gatsby>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
