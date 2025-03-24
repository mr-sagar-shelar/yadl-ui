import type { Meta, StoryObj } from "@storybook/react";
import NetworkInterfaces from "../NetworkInterfaces";

const meta: Meta<typeof NetworkInterfaces> = { title: "Azure/Networking/NetworkInterfaces", component: NetworkInterfaces };

export default meta;
type Story = StoryObj<typeof NetworkInterfaces>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
