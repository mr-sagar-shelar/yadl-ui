import type { Meta, StoryObj } from "@storybook/react";
import MyPassword from "../MyPassword";

const meta: Meta<typeof MyPassword> = { title: "unDraw/MyPassword", component: MyPassword };

export default meta;
type Story = StoryObj<typeof MyPassword>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
