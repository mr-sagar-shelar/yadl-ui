import type { Meta, StoryObj } from "@storybook/react";
import AppServiceDomains from "../AppServiceDomains";

const meta: Meta<typeof AppServiceDomains> = { title: "Azure/AppServices/AppServiceDomains", component: AppServiceDomains };

export default meta;
type Story = StoryObj<typeof AppServiceDomains>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
