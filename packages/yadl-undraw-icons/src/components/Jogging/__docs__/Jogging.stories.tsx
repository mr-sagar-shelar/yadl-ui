import type { Meta, StoryObj } from "@storybook/react";
import Jogging from "../Jogging";

const meta: Meta<typeof Jogging> = { title: "unDraw/Jogging", component: Jogging };

export default meta;
type Story = StoryObj<typeof Jogging>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
