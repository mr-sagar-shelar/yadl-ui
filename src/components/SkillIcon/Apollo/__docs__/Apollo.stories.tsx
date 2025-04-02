import type { Meta, StoryObj } from "@storybook/react";
import Apollo from "../Apollo";

const meta: Meta<typeof Apollo> = { title: "SkillIcon/Apollo", component: Apollo };

export default meta;
type Story = StoryObj<typeof Apollo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
