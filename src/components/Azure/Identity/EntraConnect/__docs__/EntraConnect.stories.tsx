import type { Meta, StoryObj } from "@storybook/react";
import EntraConnect from "../EntraConnect";

const meta: Meta<typeof EntraConnect> = { title: "Azure/Identity/EntraConnect", component: EntraConnect };

export default meta;
type Story = StoryObj<typeof EntraConnect>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
