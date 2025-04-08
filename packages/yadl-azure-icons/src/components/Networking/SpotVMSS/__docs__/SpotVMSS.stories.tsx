import type { Meta, StoryObj } from "@storybook/react";
import SpotVMSS from "../SpotVMSS";

const meta: Meta<typeof SpotVMSS> = { title: "Azure/Networking/SpotVMSS", component: SpotVMSS };

export default meta;
type Story = StoryObj<typeof SpotVMSS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
