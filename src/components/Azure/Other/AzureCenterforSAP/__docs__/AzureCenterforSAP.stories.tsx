import type { Meta, StoryObj } from "@storybook/react";
import AzureCenterforSAP from "../AzureCenterforSAP";

const meta: Meta<typeof AzureCenterforSAP> = { title: "Azure/Other/AzureCenterforSAP", component: AzureCenterforSAP };

export default meta;
type Story = StoryObj<typeof AzureCenterforSAP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
