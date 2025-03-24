import type { Meta, StoryObj } from "@storybook/react";
import FingerprintLogin from "../FingerprintLogin";

const meta: Meta<typeof FingerprintLogin> = { title: "unDraw/FingerprintLogin", component: FingerprintLogin };

export default meta;
type Story = StoryObj<typeof FingerprintLogin>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
