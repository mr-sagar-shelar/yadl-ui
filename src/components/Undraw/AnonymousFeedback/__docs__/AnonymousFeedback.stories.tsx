import type { Meta, StoryObj } from "@storybook/react";
import AnonymousFeedback from "../AnonymousFeedback";

const meta: Meta<typeof AnonymousFeedback> = { title: "unDraw/AnonymousFeedback", component: AnonymousFeedback };

export default meta;
type Story = StoryObj<typeof AnonymousFeedback>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
