import type { Meta, StoryObj } from "@storybook/react";
import ComputerFiles from "../ComputerFiles";

const meta: Meta<typeof ComputerFiles> = { title: "unDraw/ComputerFiles", component: ComputerFiles };

export default meta;
type Story = StoryObj<typeof ComputerFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
