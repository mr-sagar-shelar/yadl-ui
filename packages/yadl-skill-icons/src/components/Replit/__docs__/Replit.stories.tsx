import type { Meta, StoryObj } from "@storybook/react";
import Replit from "../Replit";

const meta: Meta<typeof Replit> = { title: "SkillIcon/Replit", component: Replit };

export default meta;
type Story = StoryObj<typeof Replit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
