import type { Meta, StoryObj } from "@storybook/react";
import ApplicationGroup from "../ApplicationGroup";

const meta: Meta<typeof ApplicationGroup> = { title: "Azure/Compute/ApplicationGroup", component: ApplicationGroup };

export default meta;
type Story = StoryObj<typeof ApplicationGroup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
