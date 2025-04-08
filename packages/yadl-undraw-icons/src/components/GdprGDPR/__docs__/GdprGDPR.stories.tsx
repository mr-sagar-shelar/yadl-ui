import type { Meta, StoryObj } from "@storybook/react";
import GdprGDPR from "../GdprGDPR";

const meta: Meta<typeof GdprGDPR> = { title: "unDraw/GdprGDPR", component: GdprGDPR };

export default meta;
type Story = StoryObj<typeof GdprGDPR>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
