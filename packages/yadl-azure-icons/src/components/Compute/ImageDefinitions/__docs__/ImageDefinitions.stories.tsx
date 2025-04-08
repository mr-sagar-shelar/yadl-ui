import type { Meta, StoryObj } from "@storybook/react";
import ImageDefinitions from "../ImageDefinitions";

const meta: Meta<typeof ImageDefinitions> = { title: "Azure/Compute/ImageDefinitions", component: ImageDefinitions };

export default meta;
type Story = StoryObj<typeof ImageDefinitions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
