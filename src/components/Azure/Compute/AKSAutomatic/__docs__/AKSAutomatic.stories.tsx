import type { Meta, StoryObj } from "@storybook/react";
import AKSAutomatic from "../AKSAutomatic";

const meta: Meta<typeof AKSAutomatic> = { title: "Azure/Compute/AKSAutomatic", component: AKSAutomatic };

export default meta;
type Story = StoryObj<typeof AKSAutomatic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
