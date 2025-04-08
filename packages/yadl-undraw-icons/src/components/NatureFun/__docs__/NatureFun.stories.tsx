import type { Meta, StoryObj } from "@storybook/react";
import NatureFun from "../NatureFun";

const meta: Meta<typeof NatureFun> = { title: "unDraw/NatureFun", component: NatureFun };

export default meta;
type Story = StoryObj<typeof NatureFun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
