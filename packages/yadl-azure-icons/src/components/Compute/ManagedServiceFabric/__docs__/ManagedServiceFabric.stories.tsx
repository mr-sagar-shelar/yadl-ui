import type { Meta, StoryObj } from "@storybook/react";
import ManagedServiceFabric from "../ManagedServiceFabric";

const meta: Meta<typeof ManagedServiceFabric> = { title: "Azure/Compute/ManagedServiceFabric", component: ManagedServiceFabric };

export default meta;
type Story = StoryObj<typeof ManagedServiceFabric>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
