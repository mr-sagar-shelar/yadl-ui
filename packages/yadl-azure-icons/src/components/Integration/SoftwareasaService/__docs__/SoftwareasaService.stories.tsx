import type { Meta, StoryObj } from "@storybook/react";
import SoftwareasaService from "../SoftwareasaService";

const meta: Meta<typeof SoftwareasaService> = { title: "Azure/Integration/SoftwareasaService", component: SoftwareasaService };

export default meta;
type Story = StoryObj<typeof SoftwareasaService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
