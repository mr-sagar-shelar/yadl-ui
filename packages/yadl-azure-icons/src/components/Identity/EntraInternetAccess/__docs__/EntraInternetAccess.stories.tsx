import type { Meta, StoryObj } from "@storybook/react";
import EntraInternetAccess from "../EntraInternetAccess";

const meta: Meta<typeof EntraInternetAccess> = { title: "Azure/Identity/EntraInternetAccess", component: EntraInternetAccess };

export default meta;
type Story = StoryObj<typeof EntraInternetAccess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
