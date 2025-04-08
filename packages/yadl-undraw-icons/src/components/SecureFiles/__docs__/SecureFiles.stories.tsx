import type { Meta, StoryObj } from "@storybook/react";
import SecureFiles from "../SecureFiles";

const meta: Meta<typeof SecureFiles> = { title: "unDraw/SecureFiles", component: SecureFiles };

export default meta;
type Story = StoryObj<typeof SecureFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
