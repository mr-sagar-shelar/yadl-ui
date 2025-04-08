import type { Meta, StoryObj } from "@storybook/react";
import AppRegistrations from "../AppRegistrations";

const meta: Meta<typeof AppRegistrations> = { title: "Azure/Other/AppRegistrations", component: AppRegistrations };

export default meta;
type Story = StoryObj<typeof AppRegistrations>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
