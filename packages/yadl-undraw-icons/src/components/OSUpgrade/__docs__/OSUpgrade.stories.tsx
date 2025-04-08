import type { Meta, StoryObj } from "@storybook/react";
import OSUpgrade from "../OSUpgrade";

const meta: Meta<typeof OSUpgrade> = { title: "unDraw/OSUpgrade", component: OSUpgrade };

export default meta;
type Story = StoryObj<typeof OSUpgrade>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
