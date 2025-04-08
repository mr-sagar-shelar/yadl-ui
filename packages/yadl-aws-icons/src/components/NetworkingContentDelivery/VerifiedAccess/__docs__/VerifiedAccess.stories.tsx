import type { Meta, StoryObj } from "@storybook/react";
import VerifiedAccess from "../VerifiedAccess";

const meta: Meta<typeof VerifiedAccess> = { title: "AWS/NetworkingContentDelivery/VerifiedAccess", component: VerifiedAccess };

export default meta;
type Story = StoryObj<typeof VerifiedAccess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
