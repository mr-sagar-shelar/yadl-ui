import type { Meta, StoryObj } from "@storybook/react";
import PeeringService from "../PeeringService";

const meta: Meta<typeof PeeringService> = { title: "Azure/Other/PeeringService", component: PeeringService };

export default meta;
type Story = StoryObj<typeof PeeringService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
