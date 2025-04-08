import type { Meta, StoryObj } from "@storybook/react";
import Subnet from "../Subnet";

const meta: Meta<typeof Subnet> = { title: "Azure/Networking/Subnet", component: Subnet };

export default meta;
type Story = StoryObj<typeof Subnet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
