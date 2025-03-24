import type { Meta, StoryObj } from "@storybook/react";
import OnlineCalendar from "../OnlineCalendar";

const meta: Meta<typeof OnlineCalendar> = { title: "unDraw/OnlineCalendar", component: OnlineCalendar };

export default meta;
type Story = StoryObj<typeof OnlineCalendar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
