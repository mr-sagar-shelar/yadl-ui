import type { Meta, StoryObj } from "@storybook/react";
import GuardDuty from "../GuardDuty";

const meta: Meta<typeof GuardDuty> = { title: "AWS/SecurityIdentityCompliance/GuardDuty", component: GuardDuty };

export default meta;
type Story = StoryObj<typeof GuardDuty>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
