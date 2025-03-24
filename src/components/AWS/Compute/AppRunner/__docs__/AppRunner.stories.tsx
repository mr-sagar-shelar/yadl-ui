import type { Meta, StoryObj } from "@storybook/react";
import AppRunner from "../AppRunner";

const meta: Meta<typeof AppRunner> = { title: "AWS/Compute/AppRunner", component: AppRunner };

export default meta;
type Story = StoryObj<typeof AppRunner>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
