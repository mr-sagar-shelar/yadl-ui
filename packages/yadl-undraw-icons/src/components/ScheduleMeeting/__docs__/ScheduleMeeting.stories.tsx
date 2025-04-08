import type { Meta, StoryObj } from "@storybook/react";
import ScheduleMeeting from "../ScheduleMeeting";

const meta: Meta<typeof ScheduleMeeting> = { title: "unDraw/ScheduleMeeting", component: ScheduleMeeting };

export default meta;
type Story = StoryObj<typeof ScheduleMeeting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
