import type { Meta, StoryObj } from "@storybook/react";
import OnPremisesDataGateways from "../OnPremisesDataGateways";

const meta: Meta<typeof OnPremisesDataGateways> = { title: "Azure/Networking/OnPremisesDataGateways", component: OnPremisesDataGateways };

export default meta;
type Story = StoryObj<typeof OnPremisesDataGateways>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
