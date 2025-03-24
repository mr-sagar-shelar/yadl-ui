import type { Meta, StoryObj } from "@storybook/react";
import KinesisDataStreams from "../KinesisDataStreams";

const meta: Meta<typeof KinesisDataStreams> = { title: "AWS/Analytics/KinesisDataStreams", component: KinesisDataStreams };

export default meta;
type Story = StoryObj<typeof KinesisDataStreams>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
