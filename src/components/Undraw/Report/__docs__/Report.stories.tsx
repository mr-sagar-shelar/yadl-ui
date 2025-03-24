import type { Meta, StoryObj } from "@storybook/react";
import Report from "../Report";

const meta: Meta<typeof Report> = { title: "unDraw/Report", component: Report };

export default meta;
type Story = StoryObj<typeof Report>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
