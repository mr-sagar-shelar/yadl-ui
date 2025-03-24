import type { Meta, StoryObj } from "@storybook/react";
import Heart from "../Heart";

const meta: Meta<typeof Heart> = { title: "Azure/General/Heart", component: Heart };

export default meta;
type Story = StoryObj<typeof Heart>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
