import type { Meta, StoryObj } from "@storybook/react";
import SecurityHub from "../SecurityHub";

const meta: Meta<typeof SecurityHub> = { title: "AWS/SecurityIdentityCompliance/SecurityHub", component: SecurityHub };

export default meta;
type Story = StoryObj<typeof SecurityHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
