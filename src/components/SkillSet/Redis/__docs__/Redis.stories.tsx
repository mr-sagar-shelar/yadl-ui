import type { Meta, StoryObj } from "@storybook/react";
import Redis from "../Redis";

const meta: Meta<typeof Redis> = { title: "SkillSet/Redis", component: Redis };

export default meta;
type Story = StoryObj<typeof Redis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
