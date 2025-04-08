import type { Meta, StoryObj } from "@storybook/react";
import GoldenGateBridge from "../GoldenGateBridge";

const meta: Meta<typeof GoldenGateBridge> = { title: "unDraw/GoldenGateBridge", component: GoldenGateBridge };

export default meta;
type Story = StoryObj<typeof GoldenGateBridge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
