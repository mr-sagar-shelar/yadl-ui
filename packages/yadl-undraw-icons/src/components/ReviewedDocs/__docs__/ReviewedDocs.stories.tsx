import type { Meta, StoryObj } from "@storybook/react";
import ReviewedDocs from "../ReviewedDocs";

const meta: Meta<typeof ReviewedDocs> = { title: "unDraw/ReviewedDocs", component: ReviewedDocs };

export default meta;
type Story = StoryObj<typeof ReviewedDocs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
