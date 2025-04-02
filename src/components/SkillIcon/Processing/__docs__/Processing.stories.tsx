import type { Meta, StoryObj } from "@storybook/react";
import Processing from "../Processing";

const meta: Meta<typeof Processing> = { title: "SkillIcon/Processing", component: Processing };

export default meta;
type Story = StoryObj<typeof Processing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
