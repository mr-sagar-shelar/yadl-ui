import type { Meta, StoryObj } from "@storybook/react";
import Troubleshoot from "../Troubleshoot";

const meta: Meta<typeof Troubleshoot> = { title: "Azure/General/Troubleshoot", component: Troubleshoot };

export default meta;
type Story = StoryObj<typeof Troubleshoot>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
