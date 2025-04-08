import type { Meta, StoryObj } from "@storybook/react";
import SecureServer from "../SecureServer";

const meta: Meta<typeof SecureServer> = { title: "unDraw/SecureServer", component: SecureServer };

export default meta;
type Story = StoryObj<typeof SecureServer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
