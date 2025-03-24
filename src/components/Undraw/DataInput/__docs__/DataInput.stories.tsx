import type { Meta, StoryObj } from "@storybook/react";
import DataInput from "../DataInput";

const meta: Meta<typeof DataInput> = { title: "unDraw/DataInput", component: DataInput };

export default meta;
type Story = StoryObj<typeof DataInput>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
