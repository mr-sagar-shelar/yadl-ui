import type { Meta, StoryObj } from "@storybook/react";
import AzureChaosStudio from "../AzureChaosStudio";

const meta: Meta<typeof AzureChaosStudio> = { title: "Azure/Other/AzureChaosStudio", component: AzureChaosStudio };

export default meta;
type Story = StoryObj<typeof AzureChaosStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
