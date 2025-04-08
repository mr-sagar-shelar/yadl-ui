import type { Meta, StoryObj } from "@storybook/react";
import Outpostsrack from "../Outpostsrack";

const meta: Meta<typeof Outpostsrack> = { title: "AWS/Compute/Outpostsrack", component: Outpostsrack };

export default meta;
type Story = StoryObj<typeof Outpostsrack>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
