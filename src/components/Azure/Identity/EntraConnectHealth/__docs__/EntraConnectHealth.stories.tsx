import type { Meta, StoryObj } from "@storybook/react";
import EntraConnectHealth from "../EntraConnectHealth";

const meta: Meta<typeof EntraConnectHealth> = { title: "Azure/Identity/EntraConnectHealth", component: EntraConnectHealth };

export default meta;
type Story = StoryObj<typeof EntraConnectHealth>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
