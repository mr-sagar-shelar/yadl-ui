import type { Meta, StoryObj } from "@storybook/react";
import IntuneAppProtection from "../IntuneAppProtection";

const meta: Meta<typeof IntuneAppProtection> = { title: "Azure/Intune/IntuneAppProtection", component: IntuneAppProtection };

export default meta;
type Story = StoryObj<typeof IntuneAppProtection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
