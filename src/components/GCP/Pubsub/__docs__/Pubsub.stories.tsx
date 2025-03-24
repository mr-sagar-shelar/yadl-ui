import type { Meta, StoryObj } from "@storybook/react";
import Pubsub from "../Pubsub";

const meta: Meta<typeof Pubsub> = { title: "GCP/Pubsub", component: Pubsub };

export default meta;
type Story = StoryObj<typeof Pubsub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
