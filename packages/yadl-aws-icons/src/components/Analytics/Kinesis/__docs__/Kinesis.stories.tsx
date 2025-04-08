import type { Meta, StoryObj } from "@storybook/react";
import Kinesis from "../Kinesis";

const meta: Meta<typeof Kinesis> = { title: "AWS/Analytics/Kinesis", component: Kinesis };

export default meta;
type Story = StoryObj<typeof Kinesis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
