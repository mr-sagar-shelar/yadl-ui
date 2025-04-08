import type { Meta, StoryObj } from "@storybook/react";
import Stackdriver from "../Stackdriver";

const meta: Meta<typeof Stackdriver> = { title: "GCP/Stackdriver", component: Stackdriver };

export default meta;
type Story = StoryObj<typeof Stackdriver>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
