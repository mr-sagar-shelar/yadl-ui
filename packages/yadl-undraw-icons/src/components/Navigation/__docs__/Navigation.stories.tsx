import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "../Navigation";

const meta: Meta<typeof Navigation> = { title: "unDraw/Navigation", component: Navigation };

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
