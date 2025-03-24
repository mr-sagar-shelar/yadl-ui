import type { Meta, StoryObj } from "@storybook/react";
import Events from "../Events";

const meta: Meta<typeof Events> = { title: "unDraw/Events", component: Events };

export default meta;
type Story = StoryObj<typeof Events>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
