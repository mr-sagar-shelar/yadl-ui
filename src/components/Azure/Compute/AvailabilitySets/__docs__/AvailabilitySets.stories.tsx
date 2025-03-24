import type { Meta, StoryObj } from "@storybook/react";
import AvailabilitySets from "../AvailabilitySets";

const meta: Meta<typeof AvailabilitySets> = { title: "Azure/Compute/AvailabilitySets", component: AvailabilitySets };

export default meta;
type Story = StoryObj<typeof AvailabilitySets>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
