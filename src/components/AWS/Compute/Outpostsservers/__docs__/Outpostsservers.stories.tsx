import type { Meta, StoryObj } from "@storybook/react";
import Outpostsservers from "../Outpostsservers";

const meta: Meta<typeof Outpostsservers> = { title: "AWS/Compute/Outpostsservers", component: Outpostsservers };

export default meta;
type Story = StoryObj<typeof Outpostsservers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
