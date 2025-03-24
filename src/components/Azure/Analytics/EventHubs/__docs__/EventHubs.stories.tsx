import type { Meta, StoryObj } from "@storybook/react";
import EventHubs from "../EventHubs";

const meta: Meta<typeof EventHubs> = { title: "Azure/Analytics/EventHubs", component: EventHubs };

export default meta;
type Story = StoryObj<typeof EventHubs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
