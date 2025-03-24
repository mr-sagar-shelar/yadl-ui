import type { Meta, StoryObj } from "@storybook/react";
import MyUniverse from "../MyUniverse";

const meta: Meta<typeof MyUniverse> = { title: "unDraw/MyUniverse", component: MyUniverse };

export default meta;
type Story = StoryObj<typeof MyUniverse>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
