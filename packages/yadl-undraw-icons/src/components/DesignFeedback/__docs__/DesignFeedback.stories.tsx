import type { Meta, StoryObj } from "@storybook/react";
import DesignFeedback from "../DesignFeedback";

const meta: Meta<typeof DesignFeedback> = { title: "unDraw/DesignFeedback", component: DesignFeedback };

export default meta;
type Story = StoryObj<typeof DesignFeedback>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
