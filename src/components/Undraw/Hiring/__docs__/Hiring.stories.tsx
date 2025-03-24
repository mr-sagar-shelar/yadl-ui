import type { Meta, StoryObj } from "@storybook/react";
import Hiring from "../Hiring";

const meta: Meta<typeof Hiring> = { title: "unDraw/Hiring", component: Hiring };

export default meta;
type Story = StoryObj<typeof Hiring>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
