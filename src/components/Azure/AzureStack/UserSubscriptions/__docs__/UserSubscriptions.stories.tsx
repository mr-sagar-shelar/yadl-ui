import type { Meta, StoryObj } from "@storybook/react";
import UserSubscriptions from "../UserSubscriptions";

const meta: Meta<typeof UserSubscriptions> = { title: "Azure/AzureStack/UserSubscriptions", component: UserSubscriptions };

export default meta;
type Story = StoryObj<typeof UserSubscriptions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
