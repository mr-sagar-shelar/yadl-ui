import type { Meta, StoryObj } from "@storybook/react";
import KinesisFirehose from "../KinesisFirehose";

const meta: Meta<typeof KinesisFirehose> = { title: "AWS/Analytics/KinesisFirehose", component: KinesisFirehose };

export default meta;
type Story = StoryObj<typeof KinesisFirehose>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
