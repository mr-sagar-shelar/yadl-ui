import type { Meta, StoryObj } from "@storybook/react";
import Lost from "../Lost";

const meta: Meta<typeof Lost> = { title: "unDraw/Lost", component: Lost };

export default meta;
type Story = StoryObj<typeof Lost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
