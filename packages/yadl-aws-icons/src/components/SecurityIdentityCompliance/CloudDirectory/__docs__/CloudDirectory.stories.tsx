import type { Meta, StoryObj } from "@storybook/react";
import CloudDirectory from "../CloudDirectory";

const meta: Meta<typeof CloudDirectory> = { title: "AWS/SecurityIdentityCompliance/CloudDirectory", component: CloudDirectory };

export default meta;
type Story = StoryObj<typeof CloudDirectory>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
