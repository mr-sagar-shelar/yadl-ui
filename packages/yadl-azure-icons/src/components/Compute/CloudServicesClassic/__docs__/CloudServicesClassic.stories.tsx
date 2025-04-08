import type { Meta, StoryObj } from "@storybook/react";
import CloudServicesClassic from "../CloudServicesClassic";

const meta: Meta<typeof CloudServicesClassic> = { title: "Azure/Compute/CloudServicesClassic", component: CloudServicesClassic };

export default meta;
type Story = StoryObj<typeof CloudServicesClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
