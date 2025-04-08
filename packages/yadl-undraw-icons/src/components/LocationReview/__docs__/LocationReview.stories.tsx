import type { Meta, StoryObj } from "@storybook/react";
import LocationReview from "../LocationReview";

const meta: Meta<typeof LocationReview> = { title: "unDraw/LocationReview", component: LocationReview };

export default meta;
type Story = StoryObj<typeof LocationReview>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
