import type { Meta, StoryObj } from "@storybook/react";
import OnlineCollaboration from "../OnlineCollaboration";

const meta: Meta<typeof OnlineCollaboration> = { title: "unDraw/OnlineCollaboration", component: OnlineCollaboration };

export default meta;
type Story = StoryObj<typeof OnlineCollaboration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
