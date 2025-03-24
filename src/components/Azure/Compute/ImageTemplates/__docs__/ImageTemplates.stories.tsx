import type { Meta, StoryObj } from "@storybook/react";
import ImageTemplates from "../ImageTemplates";

const meta: Meta<typeof ImageTemplates> = { title: "Azure/Compute/ImageTemplates", component: ImageTemplates };

export default meta;
type Story = StoryObj<typeof ImageTemplates>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
