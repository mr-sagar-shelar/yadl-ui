import type { Meta, StoryObj } from "@storybook/react";
import Application from "../Application";

const meta: Meta<typeof Application> = { title: "unDraw/Application", component: Application };

export default meta;
type Story = StoryObj<typeof Application>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
