import type { Meta, StoryObj } from "@storybook/react";
import VMImagesClassic from "../VMImagesClassic";

const meta: Meta<typeof VMImagesClassic> = { title: "Azure/Compute/VMImagesClassic", component: VMImagesClassic };

export default meta;
type Story = StoryObj<typeof VMImagesClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
