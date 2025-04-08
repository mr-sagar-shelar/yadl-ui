import type { Meta, StoryObj } from "@storybook/react";
import OSImagesClassic from "../OSImagesClassic";

const meta: Meta<typeof OSImagesClassic> = { title: "Azure/Compute/OSImagesClassic", component: OSImagesClassic };

export default meta;
type Story = StoryObj<typeof OSImagesClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
