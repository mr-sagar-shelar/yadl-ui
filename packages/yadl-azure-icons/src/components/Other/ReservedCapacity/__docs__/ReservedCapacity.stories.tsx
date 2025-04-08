import type { Meta, StoryObj } from "@storybook/react";
import ReservedCapacity from "../ReservedCapacity";

const meta: Meta<typeof ReservedCapacity> = { title: "Azure/Other/ReservedCapacity", component: ReservedCapacity };

export default meta;
type Story = StoryObj<typeof ReservedCapacity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
