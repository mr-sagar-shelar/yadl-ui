import type { Meta, StoryObj } from "@storybook/react";
import KinesisVideoStreams from "../KinesisVideoStreams";

const meta: Meta<typeof KinesisVideoStreams> = { title: "AWS/Analytics/KinesisVideoStreams", component: KinesisVideoStreams };

export default meta;
type Story = StoryObj<typeof KinesisVideoStreams>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
