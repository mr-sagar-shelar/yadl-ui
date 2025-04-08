import type { Meta, StoryObj } from "@storybook/react";
import LiveCollaboration from "../LiveCollaboration";

const meta: Meta<typeof LiveCollaboration> = { title: "unDraw/LiveCollaboration", component: LiveCollaboration };

export default meta;
type Story = StoryObj<typeof LiveCollaboration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
