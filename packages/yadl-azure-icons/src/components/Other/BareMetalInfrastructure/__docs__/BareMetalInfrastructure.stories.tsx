import type { Meta, StoryObj } from "@storybook/react";
import BareMetalInfrastructure from "../BareMetalInfrastructure";

const meta: Meta<typeof BareMetalInfrastructure> = { title: "Azure/Other/BareMetalInfrastructure", component: BareMetalInfrastructure };

export default meta;
type Story = StoryObj<typeof BareMetalInfrastructure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
