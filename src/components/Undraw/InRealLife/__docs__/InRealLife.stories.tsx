import type { Meta, StoryObj } from "@storybook/react";
import InRealLife from "../InRealLife";

const meta: Meta<typeof InRealLife> = { title: "unDraw/InRealLife", component: InRealLife };

export default meta;
type Story = StoryObj<typeof InRealLife>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
