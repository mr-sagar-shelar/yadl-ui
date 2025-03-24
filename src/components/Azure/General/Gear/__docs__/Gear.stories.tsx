import type { Meta, StoryObj } from "@storybook/react";
import Gear from "../Gear";

const meta: Meta<typeof Gear> = { title: "Azure/General/Gear", component: Gear };

export default meta;
type Story = StoryObj<typeof Gear>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
