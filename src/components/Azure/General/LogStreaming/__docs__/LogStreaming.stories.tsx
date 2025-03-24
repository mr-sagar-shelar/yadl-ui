import type { Meta, StoryObj } from "@storybook/react";
import LogStreaming from "../LogStreaming";

const meta: Meta<typeof LogStreaming> = { title: "Azure/General/LogStreaming", component: LogStreaming };

export default meta;
type Story = StoryObj<typeof LogStreaming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
