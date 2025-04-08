import type { Meta, StoryObj } from "@storybook/react";
import XRay from "../XRay";

const meta: Meta<typeof XRay> = { title: "AWS/DeveloperTools/XRay", component: XRay };

export default meta;
type Story = StoryObj<typeof XRay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
