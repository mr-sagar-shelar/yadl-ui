import type { Meta, StoryObj } from "@storybook/react";
import Relays from "../Relays";

const meta: Meta<typeof Relays> = { title: "Azure/Integration/Relays", component: Relays };

export default meta;
type Story = StoryObj<typeof Relays>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
