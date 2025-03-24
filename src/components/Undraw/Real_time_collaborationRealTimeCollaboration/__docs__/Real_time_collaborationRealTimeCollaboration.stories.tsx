import type { Meta, StoryObj } from "@storybook/react";
import Real_time_collaborationRealTimeCollaboration from "../Real_time_collaborationRealTimeCollaboration";

const meta: Meta<typeof Real_time_collaborationRealTimeCollaboration> = { title: "unDraw/Real_time_collaborationRealTimeCollaboration", component: Real_time_collaborationRealTimeCollaboration };

export default meta;
type Story = StoryObj<typeof Real_time_collaborationRealTimeCollaboration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
