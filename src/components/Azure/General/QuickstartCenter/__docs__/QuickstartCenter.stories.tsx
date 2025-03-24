import type { Meta, StoryObj } from "@storybook/react";
import QuickstartCenter from "../QuickstartCenter";

const meta: Meta<typeof QuickstartCenter> = { title: "Azure/General/QuickstartCenter", component: QuickstartCenter };

export default meta;
type Story = StoryObj<typeof QuickstartCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
