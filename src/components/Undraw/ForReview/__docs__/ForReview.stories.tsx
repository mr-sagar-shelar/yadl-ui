import type { Meta, StoryObj } from "@storybook/react";
import ForReview from "../ForReview";

const meta: Meta<typeof ForReview> = { title: "unDraw/ForReview", component: ForReview };

export default meta;
type Story = StoryObj<typeof ForReview>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
