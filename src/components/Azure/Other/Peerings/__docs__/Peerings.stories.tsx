import type { Meta, StoryObj } from "@storybook/react";
import Peerings from "../Peerings";

const meta: Meta<typeof Peerings> = { title: "Azure/Other/Peerings", component: Peerings };

export default meta;
type Story = StoryObj<typeof Peerings>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
