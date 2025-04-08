import type { Meta, StoryObj } from "@storybook/react";
import Firewalls from "../Firewalls";

const meta: Meta<typeof Firewalls> = { title: "Azure/Networking/Firewalls", component: Firewalls };

export default meta;
type Story = StoryObj<typeof Firewalls>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
