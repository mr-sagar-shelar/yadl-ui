import type { Meta, StoryObj } from "@storybook/react";
import ServiceHealth from "../ServiceHealth";

const meta: Meta<typeof ServiceHealth> = { title: "Azure/General/ServiceHealth", component: ServiceHealth };

export default meta;
type Story = StoryObj<typeof ServiceHealth>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
