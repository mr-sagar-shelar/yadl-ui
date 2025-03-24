import type { Meta, StoryObj } from "@storybook/react";
import MQ from "../MQ";

const meta: Meta<typeof MQ> = { title: "AWS/AppIntegration/MQ", component: MQ };

export default meta;
type Story = StoryObj<typeof MQ>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
