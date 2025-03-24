import type { Meta, StoryObj } from "@storybook/react";
import StreamSuite from "../StreamSuite";

const meta: Meta<typeof StreamSuite> = { title: "GCP/StreamSuite", component: StreamSuite };

export default meta;
type Story = StoryObj<typeof StreamSuite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
