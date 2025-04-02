import type { Meta, StoryObj } from "@storybook/react";
import ConditionalAccess from "../ConditionalAccess";

const meta: Meta<typeof ConditionalAccess> = { title: "Azure/Security/ConditionalAccess", component: ConditionalAccess };

export default meta;
type Story = StoryObj<typeof ConditionalAccess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
