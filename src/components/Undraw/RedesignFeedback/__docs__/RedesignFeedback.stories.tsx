import type { Meta, StoryObj } from "@storybook/react";
import RedesignFeedback from "../RedesignFeedback";

const meta: Meta<typeof RedesignFeedback> = { title: "unDraw/RedesignFeedback", component: RedesignFeedback };

export default meta;
type Story = StoryObj<typeof RedesignFeedback>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
