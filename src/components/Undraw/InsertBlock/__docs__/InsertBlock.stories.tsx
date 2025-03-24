import type { Meta, StoryObj } from "@storybook/react";
import InsertBlock from "../InsertBlock";

const meta: Meta<typeof InsertBlock> = { title: "unDraw/InsertBlock", component: InsertBlock };

export default meta;
type Story = StoryObj<typeof InsertBlock>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
