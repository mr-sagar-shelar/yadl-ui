import type { Meta, StoryObj } from "@storybook/react";
import VisualInspection from "../VisualInspection";

const meta: Meta<typeof VisualInspection> = { title: "GCP/VisualInspection", component: VisualInspection };

export default meta;
type Story = StoryObj<typeof VisualInspection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
