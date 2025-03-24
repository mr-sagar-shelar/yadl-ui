import type { Meta, StoryObj } from "@storybook/react";
import Twitter from "../Twitter";

const meta: Meta<typeof Twitter> = { title: "SkillSet/Twitter", component: Twitter };

export default meta;
type Story = StoryObj<typeof Twitter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
