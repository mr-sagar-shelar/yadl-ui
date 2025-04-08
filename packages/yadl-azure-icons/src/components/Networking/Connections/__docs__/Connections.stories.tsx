import type { Meta, StoryObj } from "@storybook/react";
import Connections from "../Connections";

const meta: Meta<typeof Connections> = { title: "Azure/Networking/Connections", component: Connections };

export default meta;
type Story = StoryObj<typeof Connections>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
