import type { Meta, StoryObj } from "@storybook/react";
import Trace from "../Trace";

const meta: Meta<typeof Trace> = { title: "GCP/Trace", component: Trace };

export default meta;
type Story = StoryObj<typeof Trace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
