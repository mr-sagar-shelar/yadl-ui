import type { Meta, StoryObj } from "@storybook/react";
import SystemTopic from "../SystemTopic";

const meta: Meta<typeof SystemTopic> = { title: "Azure/Integration/SystemTopic", component: SystemTopic };

export default meta;
type Story = StoryObj<typeof SystemTopic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
