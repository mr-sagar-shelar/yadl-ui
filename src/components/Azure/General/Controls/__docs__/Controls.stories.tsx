import type { Meta, StoryObj } from "@storybook/react";
import Controls from "../Controls";

const meta: Meta<typeof Controls> = { title: "Azure/General/Controls", component: Controls };

export default meta;
type Story = StoryObj<typeof Controls>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
