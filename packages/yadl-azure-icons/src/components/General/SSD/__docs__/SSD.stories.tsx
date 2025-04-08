import type { Meta, StoryObj } from "@storybook/react";
import SSD from "../SSD";

const meta: Meta<typeof SSD> = { title: "Azure/General/SSD", component: SSD };

export default meta;
type Story = StoryObj<typeof SSD>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
