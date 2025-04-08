import type { Meta, StoryObj } from "@storybook/react";
import EventGridSubscriptions from "../EventGridSubscriptions";

const meta: Meta<typeof EventGridSubscriptions> = { title: "Azure/Iot/EventGridSubscriptions", component: EventGridSubscriptions };

export default meta;
type Story = StoryObj<typeof EventGridSubscriptions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
