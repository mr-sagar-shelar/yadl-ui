import type { Meta, StoryObj } from "@storybook/react";
import ManagedStreamingforApacheKafka from "../ManagedStreamingforApacheKafka";

const meta: Meta<typeof ManagedStreamingforApacheKafka> = { title: "AWS/Analytics/ManagedStreamingforApacheKafka", component: ManagedStreamingforApacheKafka };

export default meta;
type Story = StoryObj<typeof ManagedStreamingforApacheKafka>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
