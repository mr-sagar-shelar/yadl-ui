import type { Meta, StoryObj } from "@storybook/react";
import Pinpoint from "../Pinpoint";

const meta: Meta<typeof Pinpoint> = { title: "AWS/BusinessApplications/Pinpoint", component: Pinpoint };

export default meta;
type Story = StoryObj<typeof Pinpoint>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
