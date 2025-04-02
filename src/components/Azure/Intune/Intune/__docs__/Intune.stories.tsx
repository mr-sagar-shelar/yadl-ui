import type { Meta, StoryObj } from "@storybook/react";
import Intune from "../Intune";

const meta: Meta<typeof Intune> = { title: "Azure/Intune/Intune", component: Intune };

export default meta;
type Story = StoryObj<typeof Intune>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
