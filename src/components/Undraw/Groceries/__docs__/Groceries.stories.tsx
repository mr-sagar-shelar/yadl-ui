import type { Meta, StoryObj } from "@storybook/react";
import Groceries from "../Groceries";

const meta: Meta<typeof Groceries> = { title: "unDraw/Groceries", component: Groceries };

export default meta;
type Story = StoryObj<typeof Groceries>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
