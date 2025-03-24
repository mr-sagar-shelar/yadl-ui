import type { Meta, StoryObj } from "@storybook/react";
import Offers from "../Offers";

const meta: Meta<typeof Offers> = { title: "Azure/AzureStack/Offers", component: Offers };

export default meta;
type Story = StoryObj<typeof Offers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
