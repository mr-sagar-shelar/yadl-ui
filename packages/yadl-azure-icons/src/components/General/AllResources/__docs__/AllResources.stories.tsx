import type { Meta, StoryObj } from "@storybook/react";
import AllResources from "../AllResources";

const meta: Meta<typeof AllResources> = { title: "Azure/General/AllResources", component: AllResources };

export default meta;
type Story = StoryObj<typeof AllResources>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
