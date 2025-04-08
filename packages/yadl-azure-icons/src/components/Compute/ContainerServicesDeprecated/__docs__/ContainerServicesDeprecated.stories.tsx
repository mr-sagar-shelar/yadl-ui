import type { Meta, StoryObj } from "@storybook/react";
import ContainerServicesDeprecated from "../ContainerServicesDeprecated";

const meta: Meta<typeof ContainerServicesDeprecated> = { title: "Azure/Compute/ContainerServicesDeprecated", component: ContainerServicesDeprecated };

export default meta;
type Story = StoryObj<typeof ContainerServicesDeprecated>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
