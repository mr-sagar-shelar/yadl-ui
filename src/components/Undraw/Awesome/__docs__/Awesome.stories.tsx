import type { Meta, StoryObj } from "@storybook/react";
import Awesome from "../Awesome";

const meta: Meta<typeof Awesome> = { title: "unDraw/Awesome", component: Awesome };

export default meta;
type Story = StoryObj<typeof Awesome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
