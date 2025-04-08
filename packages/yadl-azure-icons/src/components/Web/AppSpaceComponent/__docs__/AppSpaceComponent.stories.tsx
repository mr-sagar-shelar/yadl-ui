import type { Meta, StoryObj } from "@storybook/react";
import AppSpaceComponent from "../AppSpaceComponent";

const meta: Meta<typeof AppSpaceComponent> = { title: "Azure/Web/AppSpaceComponent", component: AppSpaceComponent };

export default meta;
type Story = StoryObj<typeof AppSpaceComponent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
