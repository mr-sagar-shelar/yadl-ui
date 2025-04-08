import type { Meta, StoryObj } from "@storybook/react";
import Elements from "../Elements";

const meta: Meta<typeof Elements> = { title: "unDraw/Elements", component: Elements };

export default meta;
type Story = StoryObj<typeof Elements>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
