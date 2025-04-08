import type { Meta, StoryObj } from "@storybook/react";
import DefenderRTU from "../DefenderRTU";

const meta: Meta<typeof DefenderRTU> = { title: "Azure/Other/DefenderRTU", component: DefenderRTU };

export default meta;
type Story = StoryObj<typeof DefenderRTU>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
