import type { Meta, StoryObj } from "@storybook/react";
import MobileTesting from "../MobileTesting";

const meta: Meta<typeof MobileTesting> = { title: "unDraw/MobileTesting", component: MobileTesting };

export default meta;
type Story = StoryObj<typeof MobileTesting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
