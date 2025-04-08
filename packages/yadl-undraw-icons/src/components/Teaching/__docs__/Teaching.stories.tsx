import type { Meta, StoryObj } from "@storybook/react";
import Teaching from "../Teaching";

const meta: Meta<typeof Teaching> = { title: "unDraw/Teaching", component: Teaching };

export default meta;
type Story = StoryObj<typeof Teaching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
