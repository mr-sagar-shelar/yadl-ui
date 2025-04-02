import type { Meta, StoryObj } from "@storybook/react";
import CloudHSM from "../CloudHSM";

const meta: Meta<typeof CloudHSM> = { title: "AWS/SecurityIdentityCompliance/CloudHSM", component: CloudHSM };

export default meta;
type Story = StoryObj<typeof CloudHSM>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
