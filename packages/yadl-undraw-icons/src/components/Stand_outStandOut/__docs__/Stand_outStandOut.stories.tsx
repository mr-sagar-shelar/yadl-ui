import type { Meta, StoryObj } from "@storybook/react";
import Stand_outStandOut from "../Stand_outStandOut";

const meta: Meta<typeof Stand_outStandOut> = { title: "unDraw/Stand_outStandOut", component: Stand_outStandOut };

export default meta;
type Story = StoryObj<typeof Stand_outStandOut>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
