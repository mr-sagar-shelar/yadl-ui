import type { Meta, StoryObj } from "@storybook/react";
import RestorePoints from "../RestorePoints";

const meta: Meta<typeof RestorePoints> = { title: "Azure/Compute/RestorePoints", component: RestorePoints };

export default meta;
type Story = StoryObj<typeof RestorePoints>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
