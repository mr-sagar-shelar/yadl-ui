import type { Meta, StoryObj } from "@storybook/react";
import Landing from "../Landing";

const meta: Meta<typeof Landing> = { title: "unDraw/Landing", component: Landing };

export default meta;
type Story = StoryObj<typeof Landing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
