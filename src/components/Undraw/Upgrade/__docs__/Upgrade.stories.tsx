import type { Meta, StoryObj } from "@storybook/react";
import Upgrade from "../Upgrade";

const meta: Meta<typeof Upgrade> = { title: "unDraw/Upgrade", component: Upgrade };

export default meta;
type Story = StoryObj<typeof Upgrade>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
