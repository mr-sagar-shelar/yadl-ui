import type { Meta, StoryObj } from "@storybook/react";
import ImageVersions from "../ImageVersions";

const meta: Meta<typeof ImageVersions> = { title: "Azure/Compute/ImageVersions", component: ImageVersions };

export default meta;
type Story = StoryObj<typeof ImageVersions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
