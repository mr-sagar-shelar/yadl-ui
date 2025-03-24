import type { Meta, StoryObj } from "@storybook/react";
import TreeSwing from "../TreeSwing";

const meta: Meta<typeof TreeSwing> = { title: "unDraw/TreeSwing", component: TreeSwing };

export default meta;
type Story = StoryObj<typeof TreeSwing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
