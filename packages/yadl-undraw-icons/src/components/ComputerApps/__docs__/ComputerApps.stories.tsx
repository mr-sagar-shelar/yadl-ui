import type { Meta, StoryObj } from "@storybook/react";
import ComputerApps from "../ComputerApps";

const meta: Meta<typeof ComputerApps> = { title: "unDraw/ComputerApps", component: ComputerApps };

export default meta;
type Story = StoryObj<typeof ComputerApps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
