import type { Meta, StoryObj } from "@storybook/react";
import AppreciateIt from "../AppreciateIt";

const meta: Meta<typeof AppreciateIt> = { title: "unDraw/AppreciateIt", component: AppreciateIt };

export default meta;
type Story = StoryObj<typeof AppreciateIt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
