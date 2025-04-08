import type { Meta, StoryObj } from "@storybook/react";
import Living from "../Living";

const meta: Meta<typeof Living> = { title: "unDraw/Living", component: Living };

export default meta;
type Story = StoryObj<typeof Living>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
