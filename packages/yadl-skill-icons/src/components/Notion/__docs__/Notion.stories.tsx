import type { Meta, StoryObj } from "@storybook/react";
import Notion from "../Notion";

const meta: Meta<typeof Notion> = { title: "SkillIcon/Notion", component: Notion };

export default meta;
type Story = StoryObj<typeof Notion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
