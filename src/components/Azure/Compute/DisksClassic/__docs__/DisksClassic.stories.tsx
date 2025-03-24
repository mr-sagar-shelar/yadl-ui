import type { Meta, StoryObj } from "@storybook/react";
import DisksClassic from "../DisksClassic";

const meta: Meta<typeof DisksClassic> = { title: "Azure/Compute/DisksClassic", component: DisksClassic };

export default meta;
type Story = StoryObj<typeof DisksClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
