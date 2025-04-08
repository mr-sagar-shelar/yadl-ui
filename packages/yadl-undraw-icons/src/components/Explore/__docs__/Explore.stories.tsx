import type { Meta, StoryObj } from "@storybook/react";
import Explore from "../Explore";

const meta: Meta<typeof Explore> = { title: "unDraw/Explore", component: Explore };

export default meta;
type Story = StoryObj<typeof Explore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
