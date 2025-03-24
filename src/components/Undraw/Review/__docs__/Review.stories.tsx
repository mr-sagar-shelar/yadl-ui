import type { Meta, StoryObj } from "@storybook/react";
import Review from "../Review";

const meta: Meta<typeof Review> = { title: "unDraw/Review", component: Review };

export default meta;
type Story = StoryObj<typeof Review>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
