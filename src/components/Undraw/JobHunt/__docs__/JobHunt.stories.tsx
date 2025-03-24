import type { Meta, StoryObj } from "@storybook/react";
import JobHunt from "../JobHunt";

const meta: Meta<typeof JobHunt> = { title: "unDraw/JobHunt", component: JobHunt };

export default meta;
type Story = StoryObj<typeof JobHunt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
