import type { Meta, StoryObj } from "@storybook/react";
import EntraConnectSync from "../EntraConnectSync";

const meta: Meta<typeof EntraConnectSync> = { title: "Azure/Identity/EntraConnectSync", component: EntraConnectSync };

export default meta;
type Story = StoryObj<typeof EntraConnectSync>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
