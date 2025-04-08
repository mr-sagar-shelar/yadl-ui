import type { Meta, StoryObj } from "@storybook/react";
import Messaging from "../Messaging";

const meta: Meta<typeof Messaging> = { title: "unDraw/Messaging", component: Messaging };

export default meta;
type Story = StoryObj<typeof Messaging>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
