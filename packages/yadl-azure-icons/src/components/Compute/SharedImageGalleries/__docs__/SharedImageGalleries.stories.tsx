import type { Meta, StoryObj } from "@storybook/react";
import SharedImageGalleries from "../SharedImageGalleries";

const meta: Meta<typeof SharedImageGalleries> = { title: "Azure/Compute/SharedImageGalleries", component: SharedImageGalleries };

export default meta;
type Story = StoryObj<typeof SharedImageGalleries>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
