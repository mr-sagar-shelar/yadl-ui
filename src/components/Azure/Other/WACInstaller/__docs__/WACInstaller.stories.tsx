import type { Meta, StoryObj } from "@storybook/react";
import WACInstaller from "../WACInstaller";

const meta: Meta<typeof WACInstaller> = { title: "Azure/Other/WACInstaller", component: WACInstaller };

export default meta;
type Story = StoryObj<typeof WACInstaller>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
