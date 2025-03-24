import type { Meta, StoryObj } from "@storybook/react";
import AppConfiguration from "../AppConfiguration";

const meta: Meta<typeof AppConfiguration> = { title: "Azure/Integration/AppConfiguration", component: AppConfiguration };

export default meta;
type Story = StoryObj<typeof AppConfiguration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
