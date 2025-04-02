import type { Meta, StoryObj } from "@storybook/react";
import FHIRService from "../FHIRService";

const meta: Meta<typeof FHIRService> = { title: "Azure/Other/FHIRService", component: FHIRService };

export default meta;
type Story = StoryObj<typeof FHIRService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
