import type { Meta, StoryObj } from "@storybook/react";
import EventGridTopics from "../EventGridTopics";

const meta: Meta<typeof EventGridTopics> = { title: "Azure/Integration/EventGridTopics", component: EventGridTopics };

export default meta;
type Story = StoryObj<typeof EventGridTopics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
