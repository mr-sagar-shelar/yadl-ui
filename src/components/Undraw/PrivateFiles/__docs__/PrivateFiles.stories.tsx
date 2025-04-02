import type { Meta, StoryObj } from "@storybook/react";
import PrivateFiles from "../PrivateFiles";

const meta: Meta<typeof PrivateFiles> = { title: "unDraw/PrivateFiles", component: PrivateFiles };

export default meta;
type Story = StoryObj<typeof PrivateFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
