import type { Meta, StoryObj } from "@storybook/react";
import VerificationAsAService from "../VerificationAsAService";

const meta: Meta<typeof VerificationAsAService> = { title: "Azure/Identity/VerificationAsAService", component: VerificationAsAService };

export default meta;
type Story = StoryObj<typeof VerificationAsAService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
