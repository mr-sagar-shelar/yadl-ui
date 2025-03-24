import type { Meta, StoryObj } from "@storybook/react";
import Applens from "../Applens";

const meta: Meta<typeof Applens> = { title: "Azure/AzureEcosystem/Applens", component: Applens };

export default meta;
type Story = StoryObj<typeof Applens>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
