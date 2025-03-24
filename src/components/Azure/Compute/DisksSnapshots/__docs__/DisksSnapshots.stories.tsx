import type { Meta, StoryObj } from "@storybook/react";
import DisksSnapshots from "../DisksSnapshots";

const meta: Meta<typeof DisksSnapshots> = { title: "Azure/Compute/DisksSnapshots", component: DisksSnapshots };

export default meta;
type Story = StoryObj<typeof DisksSnapshots>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
