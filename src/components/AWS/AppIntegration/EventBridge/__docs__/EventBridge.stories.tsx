import type { Meta, StoryObj } from "@storybook/react";
import EventBridge from "../EventBridge";

const meta: Meta<typeof EventBridge> = { title: "AWS/AppIntegration/EventBridge", component: EventBridge };

export default meta;
type Story = StoryObj<typeof EventBridge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
