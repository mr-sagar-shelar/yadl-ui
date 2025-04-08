import type { Meta, StoryObj } from "@storybook/react";
import Preparation from "../Preparation";

const meta: Meta<typeof Preparation> = { title: "unDraw/Preparation", component: Preparation };

export default meta;
type Story = StoryObj<typeof Preparation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
