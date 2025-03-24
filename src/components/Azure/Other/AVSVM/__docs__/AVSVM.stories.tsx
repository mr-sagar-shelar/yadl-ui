import type { Meta, StoryObj } from "@storybook/react";
import AVSVM from "../AVSVM";

const meta: Meta<typeof AVSVM> = { title: "Azure/Other/AVSVM", component: AVSVM };

export default meta;
type Story = StoryObj<typeof AVSVM>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
