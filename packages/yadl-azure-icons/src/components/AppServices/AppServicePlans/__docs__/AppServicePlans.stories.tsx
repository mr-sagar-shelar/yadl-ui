import type { Meta, StoryObj } from "@storybook/react";
import AppServicePlans from "../AppServicePlans";

const meta: Meta<typeof AppServicePlans> = { title: "Azure/AppServices/AppServicePlans", component: AppServicePlans };

export default meta;
type Story = StoryObj<typeof AppServicePlans>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
