import type { Meta, StoryObj } from "@storybook/react";
import AMomentToRelax from "../AMomentToRelax";

const meta: Meta<typeof AMomentToRelax> = { title: "unDraw/AMomentToRelax", component: AMomentToRelax };

export default meta;
type Story = StoryObj<typeof AMomentToRelax>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
