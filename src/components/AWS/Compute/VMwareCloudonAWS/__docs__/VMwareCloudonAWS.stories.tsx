import type { Meta, StoryObj } from "@storybook/react";
import VMwareCloudonAWS from "../VMwareCloudonAWS";

const meta: Meta<typeof VMwareCloudonAWS> = { title: "AWS/Compute/VMwareCloudonAWS", component: VMwareCloudonAWS };

export default meta;
type Story = StoryObj<typeof VMwareCloudonAWS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
