import type { Meta, StoryObj } from "@storybook/react";
import SplitTesting from "../SplitTesting";

const meta: Meta<typeof SplitTesting> = { title: "unDraw/SplitTesting", component: SplitTesting };

export default meta;
type Story = StoryObj<typeof SplitTesting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
