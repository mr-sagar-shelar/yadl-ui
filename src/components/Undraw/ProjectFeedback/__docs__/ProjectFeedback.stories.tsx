import type { Meta, StoryObj } from "@storybook/react";
import ProjectFeedback from "../ProjectFeedback";

const meta: Meta<typeof ProjectFeedback> = { title: "unDraw/ProjectFeedback", component: ProjectFeedback };

export default meta;
type Story = StoryObj<typeof ProjectFeedback>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
